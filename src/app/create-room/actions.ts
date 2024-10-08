"use server";

import { revalidatePath } from "next/cache";

import { Room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { createRoom } from "@/services/rooms";

export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
  const session = await getSession();
  if (!session) throw new Error("you must be logged in to create this room");

  const room = await createRoom(roomData, session.user.id);
  revalidatePath("/browse");
  return room;
}
