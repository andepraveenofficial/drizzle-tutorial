import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: 'postgresql',
  schema: './src/drizzle/schema',
  out: "./src/drizzle/migrations", 
  dbCredentials:{
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "andepraveen",
  database: "drizzle4",
  ssl: false, // Research on this SSL
  },
    verbose: true,
    strict: true
})