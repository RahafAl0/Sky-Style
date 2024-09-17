import { Config } from 'drizzle-kit';
import * as path from 'path';

export default {
  schema: './apps/api/src/db/schema.ts', // Path to your schema file
  out: './drizzle', // Directory to output migration files
  dialect: 'sqlite', // Specify SQLite as the database dialect
  dbCredentials: {
    url: 'sky-style.db', // Path to your SQLite database file
  },
} satisfies Config;
