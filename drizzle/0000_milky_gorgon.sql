CREATE TABLE `outfits` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer,
	`weather` text NOT NULL,
	`outfit` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL
);
