import express from "express";
import { Resend } from "resend";
import cors from "cors";
import "dotenv/config";

const app = express();
app.set("trust proxy", 1);

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const attempts = new Map();

const allowedOrigins = process.env.ALLOWED_ORIGIN
  ? process.env.ALLOWED_ORIGIN.split(",")
  : ["http://localhost:5173"];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

function validateContact({ name = "", email = "", message = "" }) {
  const clean = {
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
  };

  if (!clean.name || !clean.email || !clean.message) {
    return { error: "กรุณากรอกข้อมูลให้ครบ" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
    return { error: "อีเมลไม่ถูกต้อง" };
  }

  if (clean.name.length > 80 || clean.email.length > 120 || clean.message.length > 2000) {
    return { error: "ข้อความยาวเกินไป" };
  }

  return { clean };
}

function isRateLimited(ip) {
  const now = Date.now();
  const hit = attempts.get(ip);

  if (!hit || now - hit.startedAt > RATE_WINDOW_MS) {
    attempts.set(ip, { count: 1, startedAt: now });
    return false;
  }

  hit.count += 1;
  return hit.count > RATE_LIMIT;
}

if (process.argv.includes("--check")) {
  console.assert(validateContact({ name: "", email: "a@b.com", message: "hi" }).error);
  console.assert(validateContact({ name: "Arm", email: "bad", message: "hi" }).error);
  console.assert(validateContact({ name: "Arm", email: "a@b.com", message: "hi" }).clean.email === "a@b.com");
  process.exit(0);
}

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { website } = req.body;

  if (website) {
    return res.json({ success: true });
  }

  if (isRateLimited(req.ip)) {
    return res.status(429).json({ error: "ส่งข้อความถี่เกินไป กรุณาลองใหม่ภายหลัง" });
  }

  const result = validateContact(req.body);
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  const { name, email, message } = result.clean;

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: `[Portfolio] ข้อความจาก ${name}`,
      text: `ชื่อ: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error("resend error:", err);
    res.status(500).json({ error: "ส่งอีเมลไม่สำเร็จ กรุณาลองใหม่" });
  }
});

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
