import { db } from "../drizzle/db";
import { PgTransaction, PgQueryResultHKT } from "drizzle-orm/pg-core";
import { ExtractTablesWithRelations } from "drizzle-orm";

/*
export const unitOfWork = async (fn: any) => {
	const result = await db.transaction(fn);
	return result;
};
*/

export const unitOfWork = async <T>(
	fn: (
		trx: PgTransaction<
			PgQueryResultHKT,
			Record<string, never>,
			ExtractTablesWithRelations<Record<string, never>>
		>
	) => Promise<T>
): Promise<T> => {
	return await db.transaction(fn);
};
