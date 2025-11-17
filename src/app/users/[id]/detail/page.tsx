"use client";
import { useGetUserById } from "@/components/parts/users/api";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const { data } = useGetUserById(Number(id));
  return (
    <div className="bg-slate-300 p-5 rounded-xl max-w-sm mx-auto mt-10">
      <h1 className="font-semibold text-center text-lg mb-5">Detail Pengguna</h1>
      <p>Nama: {data?.nama}</p>
      <p>Umur: {data?.umur}</p>
    </div>
  );
};

export default Page;
