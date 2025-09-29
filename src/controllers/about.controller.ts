import type { Request, Response } from "express";
import prisma from "../config/prisma";

export const getAboutMe = async (req: Request, res: Response) => {
  try {
    const aboutMe = await prisma.aboutMe.findFirst({
      include: {
        skills: {
          include: {
            skillsArray: true,
          },
        },
      },
    });

    if (!aboutMe) {
      return res.status(404).json({ error: "About me not found" });
    }

    res.json(aboutMe);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch about me" });
  }
};

export const updateAboutMe = async (req: Request, res: Response) => {
  try {
    const {
      whoAmI,
      description,
      resumeUrl,
      githubUrl,
      linkedinUrl,
      twitterUrl,
      yearsExp,
      projectsDone,
      techMastered,
      codeCommits,
    } = req.body;

    // Since we only have one about me entry, we'll upsert
    const aboutMe = await prisma.aboutMe.upsert({
      where: { id: "default-about" },
      update: {
        whoAmI,
        description,
        resumeUrl,
        githubUrl,
        linkedinUrl,
        twitterUrl,
        yearsExp,
        projectsDone,
        techMastered,
        codeCommits,
      },
      create: {
        id: "default-about",
        whoAmI,
        description,
        resumeUrl,
        githubUrl,
        linkedinUrl,
        twitterUrl,
        yearsExp,
        projectsDone,
        techMastered,
        codeCommits,
      },
    });

    res.json(aboutMe);
  } catch (error) {
    res.status(500).json({ error: "Failed to update about me" });
  }
};
