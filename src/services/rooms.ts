import { eq } from "drizzle-orm";
import { like } from "drizzle-orm";

import { db } from "@/db";
import { getSession } from "@/lib/auth";
import { Room, room } from "@/db/schema";

export async function getRooms(search: string | undefined) {
  const where = search ? like(room.tags, `%${search}%`) : undefined;
  const rooms = await db.query.room.findMany({
    where,
  });
  return rooms;
}

export async function createRoom(
  roomData: Omit<Room, "id" | "userId">,
  userId: string
) {
  const inserted = await db
    .insert(room)
    .values({ ...roomData, userId })
    .returning();
  return inserted[0];
}
