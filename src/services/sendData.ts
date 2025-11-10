"use client";

import { convertToFormData } from "@/utilities/convertToFormData";
import { ResponseDataAttributes } from "@/utilities/responseData";

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
export default async function sendData<T, D extends Object>(
  fn: (data: D) => Promise<ResponseDataAttributes<T>>, // Mutasi dengan data bertipe D
  _data: D, // Data yang dikirim ke server
  option?: {
    isFormData?: boolean; // Jika true, kirim FormData
  }
): Promise<ResponseDataAttributes<T>> {
  // Tentukan tipe data yang akan dikirim, apakah FormData atau D
  const data: D | FormData = option?.isFormData
    ? convertToFormData(_data)
    : _data;

  // Panggil fungsi mutation
  const res = await fn(data as D); // Pastikan type casting untuk data

  // Cek status code dari response server
  if (res.status >= 200 && res.status < 300) {
    if (res.data === null || res.data === undefined) {
      // Error jika tidak ada data yang dikembalikan
      throw new Error("Response success but no data returned");
    }
    // Return response lengkap
    return res;
  }

  // Format error message dan lempar error
  const errorMessage = res.message || "Unknown server error";
  throw new Error(`[${res.status}] ${errorMessage}`);
}
