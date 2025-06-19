# Drizzle Schema

### Notation
- Database ColumnNames : snake_case
- Typescript Object Keys : camelCase

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
2. migration file name : `npx drizzle-kit generate --name=usersTable` 
  -  eg: `npx drizzle-kit generate --name=products_table_created`
1. Delete migraions : `npx drizzle-kit drop`
1. Open drizzle studio : `npx drizzle-kit studio`
1. Migrate to Database : `npx drizzle-kit migrate`
1. Migrate to Databse : `npx drizzle-kit push` -> Only for development


### Installation
- `npm install`

### Start the Application
- development : `npm run dev`
- production : `npm start`




