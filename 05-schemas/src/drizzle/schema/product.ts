import {
	pgTable,
	uuid,
	varchar,
	text,
	timestamp,
	primaryKey,
} from "drizzle-orm/pg-core";

// ======================
// Users (one-to-one with Profile)
// ======================
export const UsersTable = pgTable("users", {
	id: uuid("id").primaryKey().defaultRandom(),
	email: varchar("email", { length: 255 }).notNull().unique(),
	name: varchar("name", { length: 255 }).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ======================
// Profiles (one-to-one)
// ======================
export const ProfilesTable = pgTable("profiles", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id")
		.references(() => UsersTable.id, { onDelete: "cascade" })
		.notNull()
		.unique(), // Ensures one-to-one
	bio: text("bio"),
	avatarUrl: varchar("avatar_url", { length: 255 }),
});

// ======================
// Posts (one-to-many)
// ======================
export const PostsTable = pgTable("posts", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id")
		.references(() => UsersTable.id, { onDelete: "cascade" })
		.notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: text("content"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ======================
// Students
// ======================
export const StudentsTable = pgTable("students", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("name", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }).unique().notNull(),
});

// ======================
// Courses
// ======================
export const CoursesTable = pgTable("courses", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: varchar("title", { length: 255 }).notNull(),
	description: text("description"),
});

// ======================
// Student-Course (many-to-many)
// ======================
export const StudentCoursesTable = pgTable("student_courses", {
	studentId: uuid("student_id")
		.references(() => StudentsTable.id, { onDelete: "cascade" })
		.notNull(),
	courseId: uuid("course_id")
		.references(() => CoursesTable.id, { onDelete: "cascade" })
		.notNull(),
}, (table) => ({
	pk: primaryKey({ columns: [table.studentId, table.courseId] }),
}));