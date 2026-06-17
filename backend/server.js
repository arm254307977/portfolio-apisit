import express from "express";
import { Resend } from "resend";
import cors from "cors";
import "dotenv/config";

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = process.env.ALLOWED_ORIGIN
  ? process.env.ALLOWED_ORIGIN.split(",")
  : ["http://localhost:5173"];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "กรุณากรอกข้อมูลให้ครบ" });
  }

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