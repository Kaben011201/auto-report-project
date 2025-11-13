"use client";
import { useGetUsers } from "@/components/parts/users/api";
import { usersColumns } from "@/components/parts/users/columns";
import DataTable from "@/components/shared/dataTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { data } = useGetUsers();
  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="mb-5">Tabel Pengguna</h1>
      <div className="flex justify-end">
        <Button onClick={() => router.push("/users/create")} className="mb-2">
          <Plus />
          Tambah Pengguna
        </Button>
      </div>
      <DataTable data={data || []} columns={usersColumns} />
    </div>
  );
};

export default Page;
