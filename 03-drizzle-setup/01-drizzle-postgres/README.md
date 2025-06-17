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

### 2. Drizzle Setup
1. Drizzle ORM: `npm install drizzle-orm`
2. postgres driver : `npm install pg` , types : `npm install -D @types/pg`
3. Install Drizzle Execution Kit : `npm install -D drizzle-kit`
4. db setup
```ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "andepraveen",
  database: "drizzle",
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
  dialect: 'postgresql',
  schema: './src/drizzle/schema', // schema files place
  out: "./src/drizzle/migrations", // migration files place
  dbCredentials:{
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "andepraveen",
  database: "drizzle1",
  },
    verbose: true,
    strict: true
})
```


### scripts
1. generate -> generate the migration files (sql schema)
2. apply schema to the database
3. studio -> open drizzle studio
```json
"scripts":{
  "db:generate": "drizzle-kit generate",
  "db:migrate":"drizzle-kit migrate",
  "db:studio":"drizzle-kit studio"
}
```

#### migrations
1. Create migration : `npx drizzle-kit generate`
2. Delete migraions : `npx drizzle-kit drop`
3. Open drizzle studio : `npx drizzle-kit studio`
4. migration file name : `npx drizzle-kit generate --name=usersTable`
5. Migrate to Databse : `npx drizzle-kit push` -> Only for development


### Installation
- `npm install`

### Start the Application
- development : `npm run dev`
- production : `npm start`


### Setup Documentation : [https://orm.drizzle.team/docs/get-started-postgresql]

