# Unit Of Work

### Techstack

1. Environment : `NodeJS`
2. Language : `Typescript`
3. Server : `express`
4. ORM : `DrizzleORM`
5. Database : `PostgreSQL`

### Template

- This project uses a template based on the **06-demo-app**.

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
2. create migration file with migration fileName : `npx drizzle-kit generate --name=products_table`
3. Delete migraions : `npx drizzle-kit drop`
4. apply migration file to Database : `npx drizzle-kit migrate`
5. Open drizzle studio : `npx drizzle-kit studio`
6. Migrate to Databse : `npx drizzle-kit push` -> Only for development

### Enter Seed Data

```json package.json
"db:seed": "ts-node ./src/drizzle/seeds/main.seed.ts"
```

- Seeds : `npm run db:seed`

### Installation

- `npm install`

### Start the Application

- development : `npm run dev`
- production : `npm start`

### Unit of Work Pattern

- The Unit of Work (UoW) pattern is a design pattern used to group one or more operations (typically database changes) into a single "unit" or transaction. It ensures all operations either succeed together or fail together, maintaining data consistency.

### How Unit of Work Helps

- Wraps multiple operations into a single transaction.
- If everything succeeds, the changes are committed.
- If anything fails, the changes are rolled back.

### trnsaction

- SQL `transaction` is a grouping of one or more SQL statements that interact with a database. A transaction in its entirety can commit to a database as a single logical unit or rollback (become undone) as a single logical unit.

```ts
await db.transaction(async (trx) => {
	await trx.insert(users).values({ name: "Alice" });
	await trx.insert(orders).values({ userId: 1, product: "Book" });
});
```
