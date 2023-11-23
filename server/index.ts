import express from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Create post
app.post(`/post`, async (req, res) => {
  try {
    const { title, description } = req.body;

    const result = await prisma.post.create({
      data: {
        title,
        description,
      },
    });

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json("Something went wrong.");
  } finally {
    await prisma.$disconnect();
  }
});

// List posts
app.get(`/posts`, async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(posts);
  } catch (error) {
    console.error(error);

    res.status(500).json("Something went wrong.");
  } finally {
    await prisma.$disconnect();
  }
});

// Delete post
app.delete(`/post/:id`, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.post.delete({
      where: {
        id,
      },
    });

    res.json(post);
  } catch {
    console.error(error);

    res.status(500).json("Something went wrong.");
  } finally {
    await prisma.$disconnect();
  }
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(3000, () => console.log(`Server ready at: http://localhost:3000`));
