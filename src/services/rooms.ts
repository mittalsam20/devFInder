import { like } from "drizzle-orm";

import { db } from "@/db";
import { room } from "@/db/schema";

export async function getRooms(search: string | undefined) {
  const where = search ? like(room.tags, `%${search}%`) : undefined;
  const rooms = await db.query.room.findMany({
    where,
  });
  return rooms;
}
