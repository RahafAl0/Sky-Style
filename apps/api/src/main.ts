import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3333;
const prisma = new PrismaClient();

app.use(express.json());

app.post('/api/users/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user', details: error.message });
  }
});

app.post('/api/users/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (user && user.password === password) {
      res.status(200).json({ message: 'User logged in successfully' });
    } else {
      res.status(400).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error logging in user', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});
