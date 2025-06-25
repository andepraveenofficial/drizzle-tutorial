import {
	integer,
	pgTable,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

export const ProductTable = pgTable("products", {
	id: uuid("id").primaryKey().defaultRandom().unique(),
	name: varchar("name").notNull(),
	quantity: integer("quantity").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
