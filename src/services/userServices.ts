"use server";
import { UserPayload } from "@/components/parts/users/validation";
import { prisma } from "@/lib/prisma";
import { ResponseData } from "@/utilities/responseData";

export async function getUsersService() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        id: "desc",
      }
    });
    return ResponseData.ok(users, "Users fetched successfully");
  } catch (error: any) {
    console.error("Users fetched error", error);
    return ResponseData.error(
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}

export async function createUserService(body: UserPayload) {
  try {
    const newUser = await prisma.user.create({
      data: {
        nama: body.nama,
        umur: body.umur as number,
      },
    });
    return ResponseData.ok(newUser, "User created successfully");
  } catch (error: any) {
    console.error("User creation error", error);
    return ResponseData.error(
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}
