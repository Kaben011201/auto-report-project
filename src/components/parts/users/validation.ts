import { z } from "zod";

export const userSchema = z.object({
  nama: z
    .string({ message: "Nama wajib diisi" })
    .min(2, { message: "Nama minimal 2 karakter" })
    .max(10, { message: "Nama maksimal 10 karakter" }),
  umur: z.union(
    [z.number({ message: "Umur harus berupa angka" }), z.string()],
    { message: "Umur wajib diisi" }
  ),
});

export type UserPayload = z.infer<typeof userSchema>;
