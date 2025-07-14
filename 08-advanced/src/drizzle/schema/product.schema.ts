import { InferInsertModel, InferModel, InferSelectModel } from "drizzle-orm";
import {
	integer,
	pgTable,
	timestamp,
	index,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

// schema
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

// 01 model
export type ProductModel = typeof ProductTable.$inferSelect;

// DTOs

// 01 selectAl DTO
export type ProductSelectDto = InferSelectModel<typeof ProductTable>;

// 02 fullUpdate DTO
export type ProductInsertDto = InferInsertModel<typeof ProductTable>;

// 03 partialUpdate DTO
export type ProductUpdateDto = Partial<ProductInsertDto>;

// 04 DTO for selecting particular fields
export type ProductBasicDto = Pick<
	ProductSelectDto,
	"id" | "name" | "quantity"
>;
