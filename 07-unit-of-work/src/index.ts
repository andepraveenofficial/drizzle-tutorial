import express, { Request, Response } from "express";
import { db, connectToDatabase } from "./drizzle/db";
import { ProductTable } from "./drizzle/schema/product.schema";

const app = express();

app.use(express.json());

/* -----> Start the Server <----- */
const port = 5000;
app.listen(port, () => {
	connectToDatabase();
	console.log(`Example app listening on port ${port}`);
});

/* -----> Routes <----- */

app.get("/", (req: Request, res: Response) => {
	console.log("I am Home Route");
	res.send("I am Home route");
});

app.get("/products", async (req: Request, res: Response) => {
	const allProducts = await db.select().from(ProductTable);
	res.send(allProducts);
});

/* -----> transaction <----- */

// 01 without transaction
app.post("/products1", async (req: Request, res: Response) => {
	const productData = req.body;

	try {
		const newProduct1 = await db
			.insert(ProductTable)
			.values(productData)
			.returning();
		console.log(newProduct1);

		// Simulate delay (optional)
		await new Promise((resolve) => setTimeout(resolve, 5000));

		// Simulate failure (optional)
		throw new Error("Forced error");

		const newProduct2 = await db
			.insert(ProductTable)
			.values(productData)
			.returning();

		console.log(newProduct2);

		console.log("transaction completed");

		res.send({ newProduct1, newProduct2 });
	} catch (error) {
		res.status(500).send({ error: "Transaction failed", details: error });
	}
});

// 02 with transaction
app.post("/products2", async (req: Request, res: Response) => {
	try {
		const productData = req.body;

		const result = await db.transaction(async (trx) => {
			const newProduct1 = await trx
				.insert(ProductTable)
				.values(productData)
				.returning();
			console.log(newProduct1);

			// Simulate delay (optional)
			await new Promise((resolve) => setTimeout(resolve, 5000));

			// Simulate failure (optional)
			throw new Error("Forced error");

			const newProduct2 = await trx
				.insert(ProductTable)
				.values(productData)
				.returning();
			console.log(newProduct2);
			return { newProduct1, newProduct2 };
		});

		console.log("transaction completed");

		res.send(result);
	} catch (error) {
		res.status(500).send({ error: "Transaction failed", details: error });
	}
});

/* -----> UnitOfWork <----- */

// 01 transaction using as a unit of work
