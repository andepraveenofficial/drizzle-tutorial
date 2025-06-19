
import dotenv from 'dotenv';
dotenv.config();

import {connectToDatabase, db} from "./drizzle/db"
import { ProductTable } from './drizzle/schema/product';

/*  -----> Database connection <----- */

/* -----> Database Connection Testing <-----*/
async function main() {
  // 00 Database Connection
  await connectToDatabase();

  /* -----> CRUD <-----*/

  // 01 Select

  const allProducts = await db.select().from(ProductTable);
  console.log(allProducts)


  
}

main().then(() => console.log("Done"))
 