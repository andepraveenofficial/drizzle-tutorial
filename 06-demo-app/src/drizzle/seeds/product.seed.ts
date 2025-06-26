import { db } from "../db";
import schema from "../schema";

export const seedProducts = async () => {
	// Delete all existing products
	console.log("🗑️  Deleting existing ProductTable data...");
	await db.delete(schema.ProductTable);
	console.log("✅ ProductTable data deleted successfully.");

	/*
	// Products to seed
	const data = [
		{
			name: "Product 1",
			quantity: 10,
		},
		{
			name: "Product 2",
			quantity: 20,
		},
		{
			name: "Product 3",
			quantity: 30,
		},
		{
			name: "Product 4",
			quantity: 40,
		},
		{
			name: "Product 5",
			quantity: 50,
		},
	];
	*/

	const data = [];

	for (let i = 1; i <= 5000; i++) {
		const product = {
			name: `Product ${i}`,
			quantity: i * 10,
		};
		data.push(product);
	}

	console.log("🌱 Seeding product data...");
	await db.insert(schema.ProductTable).values(data);
	console.log("✅ Products seeded successfully.");
};
