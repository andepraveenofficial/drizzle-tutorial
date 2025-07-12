import { defineConfig } from "drizzle-kit";
export default defineConfig({
	dialect: "postgresql", // type of database
	schema: "./src/drizzle/schema/index.ts", // Path to your schema files
	out: "./src/drizzle/migrations", // generated migration files
	dbCredentials: {
		host: "localhost",
		port: 5432,
		user: "postgres",
		password: "andepraveen",
		database: "drizzle7",
		ssl: false, // Research on this SSL
	},
	verbose: true,
	strict: true,
});
