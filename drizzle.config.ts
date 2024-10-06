import { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();  // Load environment variables

export default {
  schema: './apps/api/src/db/schema.ts',  // Updated path to your schema file
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,

  },
} satisfies Config;