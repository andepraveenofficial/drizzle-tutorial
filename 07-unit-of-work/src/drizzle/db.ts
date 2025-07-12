import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "andepraveen",
	database: "drizzle7",
});

const connectToDatabase = async () => {
	try {
		console.log("🐘 Connecting to PostgreSQL database...");
		await client.connect();
		console.log("✅ 🛢️  Database connection successful!");
		console.log("🗃️  Ready to use Drizzle ORM!");
		console.log("");
	} catch (error) {
		console.log("❌ Failed to connect to the database!");
		console.error(error);
	}
};

const db = drizzle(client);
export { db, connectToDatabase };
