import {
	integer,
	pgTable,
	timestamp,
	index,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

export const ProductTable = pgTable(
	"products",
	{
		id: uuid("id").primaryKey().notNull().defaultRandom().unique(),
		name: varchar("name", { length: 255 }).notNull(),
		quantity: integer("quantity").notNull(),
		createdAt: timestamp("created_at").notNull().defaultNow(),
		updatedAt: timestamp("updated_at").notNull().defaultNow(),
	},
	(table) => [index("name_idx").on(table.name)]
);
