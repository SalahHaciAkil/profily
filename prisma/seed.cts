import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function seed() {
  try {
    // Create users
    const user1 = await prisma.user.create({
      data: {
        username: "user1",
        email: "user1@example.com",
        password: "password1",
        isVerified: true, // Adjust as needed
        isAdmin: true, // Adjust as needed
      },
    });

    const user2 = await prisma.user.create({
      data: {
        username: "user2",
        email: "user2@example.com",
        password: "password2",
        isVerified: true, // Adjust as needed
        isAdmin: false, // Adjust as needed
      },
    });

    // Create websites
    const website1 = await prisma.website.create({
      data: {
        userId: user1.id,
        name: "Personal Website",
        type: "PERSONAL", // Adjust as needed
        description: "My personal website description",
      },
    });

    const website2 = await prisma.website.create({
      data: {
        userId: user2.id,
        name: "Company Website",
        type: "COMPANY", // Adjust as needed
        description: "Company website description",
      },
    });

    // Create sections
    const section1 = await prisma.section.create({
      data: {
        websiteId: website1.id,
        sectionName: "EXPERIENCES", // Adjust as needed
        description: "Experiences section description",
      },
    });
    // Create experiences, educations, and projects as needed
    // Example:
    await prisma.experience.create({
      data: {
        sectionId: section1.id,
        title: "Software Engineer",
        description: "Worked as a software engineer.",
        startDate: new Date("2020-01-01"),
        endDate: new Date("2022-12-31"),
      },
    });

    // Repeat similar steps for educations and projects

    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
