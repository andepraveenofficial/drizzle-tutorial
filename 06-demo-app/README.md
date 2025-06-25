# Drizzle with PostgreSQL

### 1. Basic Project Setup

1. Create Node Environment : `npm init -y`
2. Add typescript : `npm install -D typescript`
3. Add typescript configuration File : `npx tsc --init`, Change the configuration

```ts tsconfig.json
"rootDir": "./src",
"outDir": "./dist",
```

```ts tsconfig.json
  "include": ["./src/**/*"],
  "exclude": ["node_modules"]
```

4. Install node types : `npm install -D @types/node`
5. Run the the Typescript code without compile : `npm install -D ts-node`

```json package.json
  "build": "tsc",
  "start": "node ./dist/src/index.js",
  "dev": "nodemon --exec ts-node ./src/index.ts"
```

### 2. Setup Server

1. Install Server : `npm install express`
2. Install express types : `npm install -D @types/express`
3. Write express code and run the server.

```ts index.ts
import express, { Request, Response } from "express";

const app = express();
const port = 5000;

/* -----> Start the Server <----- */
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

/* -----> Routes <----- */

app.get("/", (req: Request, res: Response) => {
	console.log("I am Home Route");
	res.send("I am Home route");
});
```

### 3. Drizzle Setup

1. Drizzle ORM: `npm install drizzle-orm`
2. postgres driver : `npm install pg` , types : `npm install -D @types/pg`
3. Install Drizzle Execution Kit : `npm install -D drizzle-kit`
4. db setup

```ts db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "andepraveen",
	database: "drizzle4",
});

const connectToDatabase = async () => {
	await client.connect();
	console.log("Connected to the database");
};

const db = drizzle(client);
export { db, connectToDatabase };
```

5. drizzle config file

```ts drizzle.config.ts
import { defineConfig } from "drizzle-kit";
export default defineConfig({
	dialect: "postgresql",
	schema: "./src/drizzle/schema",
	out: "./src/drizzle/migrations",
	dbCredentials: {
		host: "localhost",
		port: 5432,
		user: "postgres",
		password: "andepraveen",
		database: "drizzle3",
		ssl: false, // Research on this SSL
	},
	verbose: true,
	strict: true,
});
```

### scripts

1. generate -> generate the migration files (sql schema)
2. migrate -> apply schema to the database
3. studio -> open drizzle studio

```json
"scripts":{
  "db:generate": "drizzle-kit generate",
  "db:migrate":"drizzle-kit migrate",
  "db:studio":"drizzle-kit studio"
}
```

#### migrations

1. Create migration file : `npx drizzle-kit generate`
2. create migration file with migration fileName : `npx drizzle-kit generate --name=usersTable`
3. Delete migraions : `npx drizzle-kit drop`
4. apply migration file to Database : `npx drizzle-kit migrate`
5. Open drizzle studio : `npx drizzle-kit studio`
6. Migrate to Databse : `npx drizzle-kit push` -> Only for development

### Enter Seed Data

```json package.json
"db:seed": "ts-node ./src/drizzle/seeds/main.seed.ts"
```

- Seeds : `npm run seed`

### Installation

- `npm install`

### Start the Application

- development : `npm run dev`
- production : `npm start`

### Setup Documentation : [https://orm.drizzle.team/docs/get-started-postgresql]
