import bcrypt from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';
import { users } from '../db/schema';
import { db } from '../db/database';
import { authenticateToken } from '../middleware/auth';
import { eq } from 'drizzle-orm';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.insert(users).values({
      username,
      password: hashedPassword,
      email,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).json({ error: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db.select().from(users).where(eq(users.username, username)).get();
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(400).json({ error: 'Error logging in' });
  }
});

router.get('/', authenticateToken, async (req, res) => {
  try {
    const allUsers = await db.select().from(users).all();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(400).json({ error: 'Error fetching users' });
  }
});

export default router;