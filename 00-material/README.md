# Drizzle

<details>
<summary>Index</summary>

## Index

- Introduction
- why drizzle is better than prisma?
- Drizzle
- Drizzle Tools
- Documentation

</details>

---

<details>
<summary>Introduction</summary>

## ORM

- **ORM** stands for **Object Relational Mapping**
- ORM is a tool that bridges the gap between your code and a database.
- Instead of writing raw SQL, you use familiar programming to interact with database. 
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
- Drizzle ORM is lightweight and doesn't rely on a Rust engine like Prisma, making it faster and more straighforward to use.
### Drizzle vs Prisma
1. The Drizzle setup is much more difficult than the Prisma setup.
2. Create the Drizzle Schema is much more difficult than the Prisma Schema.
3. Drizzle has very poor documentation than Prisma documentation.
4. Drizzle gives you more control over your database queries, so you can customize them exactly how you want.
5. Drizzle is known for delivering better runtime performance compared to Prisma
6. Both ORMs offer excellent TypeScript support with strong type safety.
7. Drizzle ORM is closer to raw SQL, so if you're familiar wih SQL, you can easily translate SQL queries into Drizzle queries.

</details>

---

<details>
<summary>Drizzle</summary>

## Drizzle

- Drizzle is a ORM
- Drizzle ORM is a lightweight and type-safe Object Relational Mapping (ORM) library for SQL databases.
- It supports the many Databases like `MySQL`, `PostgresSQL`, ...etc.
- It focuses on providing a simple and developer-friendly API while maintaining high performance.
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

</details>

---

<details>
<summary>Documentation</summary>

## Documentation

- Official Documentation : [https://orm.drizzle.team/docs/overview]

</details>

---