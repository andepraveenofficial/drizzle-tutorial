import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "andepraveen",
  database: "drizzle3",
});

const connectToDatabase = async () => {
  await client.connect();
  console.log("Connected to the database");
};

const db = drizzle(client);
export { db, connectToDatabase };
