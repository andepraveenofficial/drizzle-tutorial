
import dotenv from 'dotenv';
dotenv.config();

import {connectToDatabase, db} from "./drizzle/db"
import { Userstable } from './drizzle/schema/user';

/*  -----> Database connection <----- */

/* -----> Database Connection Testing <-----*/
async function main() {
  await connectToDatabase();
  const result = await db.execute('select 1');
  return result;
  // const allUsers = await db.select().from(Userstable);
  // return allUsers
}

main().then((data) => console.log(data))
 