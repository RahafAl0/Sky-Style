import express from 'express';
import cors from 'cors'
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import dotenv from 'dotenv';


dotenv.config(); 

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite)


app.get('/', (req, res) => {
  res.send('Weather Clothing Matcher API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
