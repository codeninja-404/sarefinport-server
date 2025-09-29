import type { Request, Response } from "express";
import prisma from "../config/prisma";

export const getEducation = async (req: Request, res: Response) => {
  try {
    const education = await prisma.education.findMany({
      orderBy: { startYear: "desc" },
    });
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch education" });
  }
};

export const createEducation = async (req: Request, res: Response) => {
  try {
    const { degree, institution, startYear, endYear, description } = req.body;

    const education = await prisma.education.create({
      data: {
        degree,
        institution,
        startYear,
        endYear,
        description,
      },
    });

    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({ error: "Failed to create education entry" });
  }
};

export const updateEducation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { degree, institution, startYear, endYear, description } = req.body;

    const education = await prisma.education.update({
      where: { id },
      data: {
        degree,
        institution,
        startYear,
        endYear,
        description,
      },
    });

    res.json(education);
  } catch (error) {
    res.status(500).json({ error: "Failed to update education entry" });
  }
};

export const deleteEducation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.education.delete({
      where: { id },
    });

    res.json({ message: "Education entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete education entry" });
  }
};
