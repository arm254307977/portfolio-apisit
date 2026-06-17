import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import "dotenv/config";

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGIN
  ? process.env.ALLOWED_ORIGIN.split(",")
  : ["http://localhost:5173"];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // Gmail App Password (ไม่ใช่รหัสผ่านจริง)
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "กรุณากรอกข้อมูลให้ครบ" });
  }

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `[Portfolio] ข้อความจาก ${name}`,
    text: `ชื่อ: ${name}\nEmail: ${email}\n\n${message}`,
  });

  res.json({ success: true });
});

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));