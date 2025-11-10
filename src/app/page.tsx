"use client";
import { useGetUsers } from "@/components/parts/users/api";
import { usersColumns } from "@/components/parts/users/columns";
import DataTable from "@/components/shared/dataTable";

const Page = () => {
  const { data } = useGetUsers();
  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="mb-5">Tabel Pengguna</h1>
      <DataTable data={data || []} columns={usersColumns} />
    </div>
  );
};

export default Page;
