import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const Userstable = pgTable('users', {
  id: integer(),
  firstName: varchar("first_name"),
  age: integer()
})