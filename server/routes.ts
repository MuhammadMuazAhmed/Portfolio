import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactMessageSchema.parse(req.body);
      
      // Create email transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL,
        subject: `Portfolio Contact: Message from ${validatedData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Sent from your portfolio website contact form</em></p>
        `,
        replyTo: validatedData.email,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully!" 
      });

    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error 
        });
      }

      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const path = require("path");
    const resumePath = path.join(__dirname, "public", "resume.pdf");
    
    res.download(resumePath, "Muhammad_Muaz_Ahmed_Resume.pdf", (err) => {
      if (err) {
        console.error("Resume download error:", err);
        res.status(404).json({ 
          success: false, 
          message: "Resume file not found" 
        });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
