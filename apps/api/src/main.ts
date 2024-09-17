import dotenv from 'dotenv';
import express from 'express';
import usersRouter from './api/users';

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
