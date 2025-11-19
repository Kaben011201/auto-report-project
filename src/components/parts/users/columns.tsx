import { ColumnDef } from "@tanstack/react-table";
import ActionOption from "@/components/shared/table/actionOption";
import { createBaseColumns } from "../createBaseColumns";
import { deleteUserService } from "@/services/userServices";

export const usersColumns: ColumnDef<any>[] = [
  ...createBaseColumns<any>(),
  {
    header: "Nama",
    cell: ({ row }) => row.original.nama,
  },
  {
    header: "Umur",
    cell: ({ row }) => row.original.umur,
  },
  {
    accessorKey: "action",
    header: "Aksi",
    cell: ({ row }) => (
      <ActionOption
        linkView={`/users/${row.original.id}/detail`}
        linkUpdate={`/users/${row.original.id}/edit`}
        linkDelete={() => deleteUserService(row.original.id)}
        queryKey={["useGetUsers"]}
      />
    ),
  },
];
