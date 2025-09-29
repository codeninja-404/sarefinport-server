import type { Request, Response } from "express";
import prisma from "../config/prisma";

export const getContactInfo = async (req: Request, res: Response) => {
  try {
    const contactInfo = await prisma.contactInfo.findFirst();
    res.json(contactInfo);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact info" });
  }
};

export const updateContactInfo = async (req: Request, res: Response) => {
  try {
    const { phone, email, githubUrl, linkedinUrl, location } = req.body;

    const contactInfo = await prisma.contactInfo.upsert({
      where: { id: "default-contact" },
      update: {
        phone,
        email,
        githubUrl,
        linkedinUrl,
        location,
      },
      create: {
        id: "default-contact",
        phone,
        email,
        githubUrl,
        linkedinUrl,
        location,
      },
    });

    res.json(contactInfo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact info" });
  }
};

export const getContactMessages = async (req: Request, res: Response) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact messages" });
  }
};

export const createContactMessage = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    const contactMessage = await prisma.contactMessage.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      },
    });

    res.status(201).json({
      message: "Contact message submitted successfully",
      data: contactMessage,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit contact message" });
  }
};

export const deleteContactMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.contactMessage.delete({
      where: { id },
    });

    res.json({ message: "Contact message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact message" });
  }
};
