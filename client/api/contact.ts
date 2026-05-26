import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Solo aceptar POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método no permitido" });
  }

  const { name, email, message } = req.body;

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Faltan campos requeridos" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const fecha = new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; border-radius: 12px; overflow: hidden; border: 1px solid #991b1b;">
      <div style="background: #991b1b; padding: 24px 32px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">📬 Nuevo mensaje desde tu Portafolio</h1>
      </div>
      
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #999; font-size: 13px; width: 100px;">Nombre</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #f1f5f9; font-size: 15px; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #999; font-size: 13px;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #f1f5f9; font-size: 15px;">
              <a href="mailto:${email}" style="color: #f87171; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #999; font-size: 13px;">Fecha</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #f1f5f9; font-size: 15px;">${fecha}</td>
          </tr>
        </table>

        <div style="background: #262626; border-radius: 8px; padding: 20px; border-left: 4px solid #991b1b;">
          <p style="color: #999; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 1px;">Mensaje</p>
          <p style="color: #f1f5f9; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${email}" style="display: inline-block; background: #991b1b; color: #ffffff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500;">Responder a ${name}</a>
        </div>
      </div>

      <div style="background: #111; padding: 16px 32px; text-align: center;">
        <p style="color: #666; font-size: 12px; margin: 0;">Enviado desde matiascruzportafolio.vercel.app</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Portafolio - ${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `💼 Contacto: ${name} (${email})`,
    html,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
}
