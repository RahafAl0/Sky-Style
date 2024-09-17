import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

const sqlite = new Database('path_to_your_database_file.sqlite');

export const db = drizzle(sqlite);
