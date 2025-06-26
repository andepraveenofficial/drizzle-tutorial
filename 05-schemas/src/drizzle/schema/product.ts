import {
	pgTable,
	uuid,
	varchar,
	text,
	timestamp,
	primaryKey,
	index,
} from "drizzle-orm/pg-core";

// 01 Users Table

export const UsersTable = pgTable(
	"users",
	{
		id: uuid("id").primaryKey().defaultRandom(),
		email: varchar("email", { length: 255 }).notNull().unique(),
		name: varchar("name", { length: 255 }).notNull(),
		createdAt: timestamp("created_at").defaultNow().notNull(),
	},
	(table) => [index("idx_email").on(table.email)]
);

// 02 Profiles (one-to-one with UsersTable)

export const ProfilesTable = pgTable("profiles", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id")
		.references(() => UsersTable.id, { onDelete: "cascade" })
		.notNull()
		.unique(), // unique -> one-to-one
	bio: text("bio"),
	avatarUrl: varchar("avatar_url", { length: 255 }),
});

// 03 Posts (one-to-many with UsersTable)
export const PostsTable = pgTable("posts", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id")
		.references(() => UsersTable.id, { onDelete: "cascade" })
		.notNull(), // not unique -> one-to-many
	title: varchar("title", { length: 255 }).notNull(),
	content: text("content"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 04 StudentsTable
export const StudentsTable = pgTable("students", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("name", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }).unique().notNull(),
});

// 05 CoursesTable
export const CoursesTable = pgTable("courses", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: varchar("title", { length: 255 }).notNull(),
	description: text("description"),
});

// 06 Student-Course (many-to-many)

export const StudentCoursesTable = pgTable(
	"student_courses",
	{
		studentId: uuid("student_id")
			.notNull()
			.references(() => StudentsTable.id, { onDelete: "cascade" }),
		courseId: uuid("course_id")
			.notNull()
			.references(() => CoursesTable.id, { onDelete: "cascade" }),
	},
	(table) => [primaryKey({ columns: [table.studentId, table.courseId] })]
);
