# Drizzle

<details>
<summary>Index</summary>

## Index

- Introduction
- why drizzle is better than prisma?
- Drizzle
- Drizzle Tools
- Database Interactions
- Documentation

</details>

---

<details>
<summary>Introduction</summary>

## ORM

- **ORM** stands for **Object Relational Mapping**
- ORM is a tool that bridges the gap between your code and a database.
- Instead of writing raw SQL Queries, you use familiar programming to interact with database.
- This simplifies development and improves code readability.
- Example : Drizzle
- Drizzle is a ORM used in NodeJS Environment with Typescript.

</details>

---

<details>
<summary>why drizzle is better than prisma?</summary>

## why drizzle better than prisma?

- Both Drizzle and Prisma are powerful TypeScript-based ORMs used in Node.js applications.
- Unlike Prisma, Drizzle ORM always executes a single query per request.
- Drizzle ORM is a simple and lightweight tool. Unlike Prisma, it doesn't use a heavy Rust engine, so it's faster and easier to work with.

### Drizzle vs Prisma

1. The Drizzle setup is much more difficult than the Prisma setup.
2. Create the Drizzle Schema is much more difficult than the Prisma Schema.
3. Drizzle has very poor documentation than Prisma documentation.
4. Drizzle gives you more control over your database queries, so you can customize them exactly how you want.
5. Drizzle is known for delivering better runtime performance compared to Prisma
6. Both ORMs offer excellent TypeScript support with strong type safety.
7. Drizzle ORM is closer to raw SQL, so if you're familiar with SQL, you can easily translate SQL queries into Drizzle queries.

</details>

---

<details>
<summary>Drizzle</summary>

## Drizzle

- Drizzle is a ORM
- Drizzle ORM is a lightweight and type-safe Object Relational Mapping (ORM) library for SQL databases.
- It supports the many Databases like `MySQL`, `PostgresSQL`, ...etc.
- It focuses on providing a simple, developer-friendly way to work with the database while maintaining high performance.
- Drizzle ORM supports both Typescript and Javascript, offering full type safety for queries.

### Prisma vs Drizzle

- Prisma → Like Bootstrap – Flexible but not customizable
- Drizzle → Like TailwindCSS – customizable and flexible

### About Drizzle

- Cost : Open Source (Apache 2.0 / MIT license), free of cost.
- Documentation : [https://orm.drizzle.team/docs/overview] -> Poor Documentation
- Community : Large Community, 1.3M+ weekly npm downloads
- Typescript Support : Full Typescript Support
- Performance -> High

</details>

---

<details>
<summary>Drizzle Tools</summary>

## Drizzle Tools

1. Drizzle ORM
2. Drizzle Kit
3. Drizzle Studio

### 1. Drizzle ORM

- Define database schemas/tables in TypeScript.
- Perform CRUD operations (Create, Read, Update, Delete) on Database.

### 2. Drizzle Kit

- Generating SQL migration files automatically from your schema.
- Running and managing database migrations (like table creation).
- Open the Drizzle Studio

### Flow

1. Create Drizzle schema
2. generate -> generate migration files from drizzle schema
3. schema apply to the database with migration files
4. studio -> open database drizzle studio

</details>

---

<details>
<summary>Database Interactions</summary>

## Database Interaction

1. CRUD
2. Pagination
3. Filter
4. Joins

### Create Schema Note

### Notation

- Drizzle Scema Table Name : PascalCase
- Database TableName : plural snake_case (eg: products, users, order_items)
- Database ColumnNames : snake_case
- Typescript Object Keys : camelCase

## Relations

- one-to-one
- one-to-many
- many-to-one
- many-to-many

</details>

---

<details>
<summary>Documentation</summary>

## Documentation

- Official Documentation : [https://orm.drizzle.team/docs/overview]

</details>

---
