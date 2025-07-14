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

app.post("/products", async (req: Request, res: Response) => {
	const productData = req.body;
	const newProducts = await db
		.insert(ProductTable)
		.values(productData)
		.returning();
	res.send(newProducts);
});
