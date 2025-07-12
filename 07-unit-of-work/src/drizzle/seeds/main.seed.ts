import { connectToDatabase } from "../db";
import { seedProducts } from "./product.seed";

const main = async () => {
	try {
		console.log("🚀 Starting seed process...");
		await connectToDatabase();
		console.log("🔌 Database connected.");

		await seedProducts();
	} catch (e) {
		console.error("❌ Seeding failed:", e);
		process.exit(1);
	} finally {
		console.log("🎉 Seeding process completed!");
		process.exit(0);
	}
};

main().catch((e) => {
	console.error("💥 Main function error:", e);
	process.exit(1);
});
