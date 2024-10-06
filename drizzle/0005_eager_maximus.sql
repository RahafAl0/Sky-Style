CREATE TABLE `clothes` (
	`id` integer PRIMARY KEY NOT NULL,
	`userId` integer,
	`itemName` text NOT NULL,
	`itemType` text NOT NULL,
	`imageUrl` text NOT NULL,
	`suitableWeather` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `weather` (
	`id` integer PRIMARY KEY NOT NULL,
	`city` text NOT NULL,
	`temperature` integer NOT NULL,
	`weatherType` text NOT NULL,
	`date` text NOT NULL
);
