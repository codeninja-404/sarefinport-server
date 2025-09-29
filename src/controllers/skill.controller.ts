import type { Request, Response } from "express";
import prisma from "../config/prisma";

export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await prisma.skill.findMany({
      include: {
        skillsArray: true,
      },
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills" });
  }
};

export const createSkill = async (req: Request, res: Response) => {
  try {
    const { title, description, aboutMeId, skillsArray } = req.body;

    const skill = await prisma.skill.create({
      data: {
        title,
        description,
        aboutMeId,
        skillsArray: {
          create: skillsArray,
        },
      },
      include: {
        skillsArray: true,
      },
    });

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: "Failed to create skill" });
  }
};

export const updateSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, skillsArray } = req.body;

    // First update the skill
    const skill = await prisma.skill.update({
      where: { id },
      data: {
        title,
        description,
      },
    });

    // Then update skill items
    if (skillsArray) {
      // Delete existing skill items
      await prisma.skillItem.deleteMany({
        where: { skillId: id },
      });

      // Create new skill items
      await prisma.skillItem.createMany({
        data: skillsArray.map((item: any) => ({
          ...item,
          skillId: id,
        })),
      });
    }

    const updatedSkill = await prisma.skill.findUnique({
      where: { id },
      include: {
        skillsArray: true,
      },
    });

    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ error: "Failed to update skill" });
  }
};

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.skill.delete({
      where: { id },
    });

    res.json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete skill" });
  }
};
