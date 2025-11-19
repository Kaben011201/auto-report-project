"use server";
import { UserPayload } from "@/components/parts/users/validation";
import { prisma } from "@/lib/prisma";
import { ResponseData } from "@/utilities/responseData";

//SECTION - Get All Users
export async function getUsersService() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return ResponseData.ok(users, "Users fetched successfully");
  } catch (error: any) {
    console.error("Users fetched error", error);
    return ResponseData.error(
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}

//SECTION - Get One User - Get Detail User
export async function getUserByIdService(id: number) {
  try {
    const users = await prisma.user.findUnique({
      where: { id },
    });
    return ResponseData.ok(users, "Users fetched successfully");
  } catch (error: any) {
    console.error("Users fetched error", error);
    return ResponseData.error(
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}

//SECTION - Create User
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


//SECTION - Update User
export async function updateUserService(id: number, body: UserPayload) {
  try {
    const newUser = await prisma.user.update({
      where: { id },
      data: {
        nama: body.nama,
        umur: Number(body.umur),
      },
    });
    return ResponseData.ok(newUser, "User update successfully");
  } catch (error: any) {
    console.error("User creation error", error);
    return ResponseData.error(
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}

//SECTION - Delete User
export async function deleteUserService(id: number) {
  try {
    const deleteUser = await prisma.user.delete({
      where: { id },
    });

    return ResponseData.ok(deleteUser, "User deleted successfully");
  } catch(error: any) {
    console.error("User deletion error", error);
    return ResponseData.error("Unknown error");
  }
}
