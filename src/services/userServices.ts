"use server"
import { prisma } from "@/lib/prisma";
import { ResponseData } from "@/utilities/responseData";

export async function getUsersService() {
  try {
    const users = await prisma.user.findMany();
    return ResponseData.ok(users, "Users fetched successfully");
  } catch (error: any) {
    console.error("Users fetched error", error);
    return ResponseData.error(
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}
