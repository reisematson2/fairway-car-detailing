import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Create HTTP server
  const httpServer = createServer(app);

  // Prefix all routes with /api
  
  // Booking form submission endpoint
  app.post("/api/booking", async (req: Request, res: Response) => {
    try {
      const { name, email, phone, service, message } = req.body as BookingRequest;
      
      // Validate required fields
      if (!name || !email || !phone || !service) {
        return res.status(400).json({ 
          message: "Missing required fields. Please provide name, email, phone, and service." 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address." 
        });
      }

      // In a real implementation, you would:
      // 1. Store the booking in a database
      // 2. Send confirmation emails
      // 3. Potentially integrate with a calendar system

      console.log("Booking request received:", { name, email, phone, service, message });

      // Return success response
      return res.status(200).json({
        message: "Booking request received successfully. We will contact you shortly to confirm your appointment."
      });
    } catch (error) {
      console.error("Error processing booking request:", error);
      return res.status(500).json({
        message: "An error occurred while processing your booking. Please try again later."
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body as ContactRequest;

      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "Missing required fields. Please provide name, email, subject, and message." 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address." 
        });
      }

      // In a real implementation, you would:
      // 1. Store the contact submission in a database
      // 2. Send notification emails to staff
      // 3. Send confirmation email to the customer

      console.log("Contact form submission received:", { name, email, subject, message });

      // Return success response
      return res.status(200).json({
        message: "Thank you for your message. We will get back to you as soon as possible."
      });
    } catch (error) {
      console.error("Error processing contact form submission:", error);
      return res.status(500).json({
        message: "An error occurred while processing your message. Please try again later."
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      // Validate email
      if (!email) {
        return res.status(400).json({ 
          message: "Email address is required." 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address." 
        });
      }

      // In a real implementation, you would:
      // 1. Add the email to your newsletter service (Mailchimp, etc.)
      // 2. Send a confirmation email

      console.log("Newsletter subscription received:", { email });

      // Return success response
      return res.status(200).json({
        message: "Thank you for subscribing to our newsletter!"
      });
    } catch (error) {
      console.error("Error processing newsletter subscription:", error);
      return res.status(500).json({
        message: "An error occurred while processing your subscription. Please try again later."
      });
    }
  });
  
  // Blog retrieval endpoints would be added here in a real implementation
  // Example: GET /api/blog for blog listings, GET /api/blog/:slug for individual blog posts

  return httpServer;
}
