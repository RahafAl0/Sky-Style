import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  username: text('username').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
});

// export const outfits = sqliteTable('outfits', {
//   id: integer('id').primaryKey(),// Ensure `autoincrement` is supported or use alternative
//   userId: integer('user_id').references(() => users.id),
//   weather: text('weather').notNull(),
//   outfit: text('outfit').notNull(),
// });
