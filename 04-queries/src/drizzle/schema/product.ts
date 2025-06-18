import { integer, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { CompanyTable } from "./company";

export const ProductTable = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom().unique(),
  name: varchar("name").notNull(),
  price: integer("price").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),

  // relations
  companyId: uuid("company_id")
    .notNull()
    .references(() => CompanyTable.id, { onDelete: "cascade" }), // FK for 1-to-many
});