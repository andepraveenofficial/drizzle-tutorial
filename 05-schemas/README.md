# Drizzle Schema

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

### Installation

- `npm install`

### Start the Application

- development : `npm run dev`
- production : `npm start`
