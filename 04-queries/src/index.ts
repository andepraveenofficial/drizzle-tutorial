
import dotenv from 'dotenv';
dotenv.config();

import {connectToDatabase, db} from "./drizzle/db"
import { ProductTable } from './drizzle/schema/product';
import { asc, desc, eq, sql } from 'drizzle-orm';
import { CompanyTable } from './drizzle/schema/company';

/*  -----> Database connection <----- */

/* -----> Database Connection Testing <-----*/
async function main() {
  // 00 Database Connection
  await connectToDatabase();

  /* -----> CRUD <-----*/

  // 01 Select
  /*
  const allProducts = await db.select().from(ProductTable);
  console.log(allProducts)
  */

  // 02 Insert
  // Single Record
  /*
  const newProduct = await db.insert(ProductTable).values({
    name: "Mobile",
    price: 65000
  }).returning();
  console.log(newProduct)
  */

  // Multiple Records
  /*
  const newProducts = await db.insert(ProductTable).values([
    {name: "Laptop", price: 75000},
    {name: "Desktop", price: 85000}
  ]).returning();
  console.log(newProducts)
  */

  // 03 Update
  /*
  const updatedProduct = await db.update(ProductTable).set({
    name: "Tablet",
    price: 55000,
    updatedAt: sql`NOW()`
  }).where(eq(ProductTable.id, '1ef570c2-c09b-4e4f-ab71-64d4c7eb6393')).returning();
  console.log(updatedProduct)
  */

  // 04 Delete
  /*
  const deletedProduct = await db.delete(ProductTable).where(eq(ProductTable.id, '759577ba-afcf-4fa2-8289-9fd8e82059fd')).returning();
  console.log(deletedProduct)
  */

  /* -----> Pagination <----- */
  // 01 Order
  // 01 asc
  /*
  const allProducts = await db.select().from(ProductTable).orderBy(asc(ProductTable.price));
  console.log(allProducts)
  */

  // 02 desc
  /*
  const allProductsDesc = await db.select().from(ProductTable).orderBy(desc(ProductTable.price));
  console.log(allProductsDesc)
  */
  
  // 02 limit
  /*
  const allProducts = await db.select().from(ProductTable).limit(2);
  console.log(allProducts)
  */

  // 03 offset
/*
  const allProducts = await db.select().from(ProductTable).limit(2).offset(2);
  console.log(allProducts)
  */

  /* -----> Filter <----- */
  // 01 eq
  /*
  const mobileProducts = await db.select().from(ProductTable).where(eq(ProductTable.name, "Laptop"));
  console.log(mobileProducts);
  */
  
  /* -----> Joins <----- */
  /*
  const newCompany = await db.insert(CompanyTable).values({
    name: "Google"
  }).returning();
  console.log(newCompany);
  */
  /*
    const newProduct = await db.insert(ProductTable).values({
    name: "Desktop",
      price: 65000,
    companyId:"83e6a8b8-8dad-4f57-88e4-81a1f87c4672"
  }).returning();
  console.log(newProduct)
  */
  

  const companyWithProducts = await db.select({companyName: CompanyTable.name, productname: ProductTable.name }).from(CompanyTable).leftJoin(ProductTable, eq(CompanyTable.id, ProductTable.companyId));
  console.log(companyWithProducts);
}

main().then(() => console.log("Done"))
 