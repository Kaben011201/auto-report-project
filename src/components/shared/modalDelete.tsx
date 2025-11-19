import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useDeleteByService } from "../parts/global/api";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { ResponseDataAttributes } from "@/utilities/responseData";
import { Trash } from "lucide-react";

const ModalDelete = ({
  endpoint,
  endPointBack,
  queryKey,
}: {
  endpoint: string | (() => Promise<ResponseDataAttributes<any>>);
  endPointBack?: string;
  queryKey?: string;
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  // const deleteMutation = useDelete();
  const deleteByServiceMutation = useDeleteByService();

  const handleDelete = async () => {
    if (typeof endpoint === "string") {
      // await deleteMutation.mutateAsync({ endpoint });
    } else {
      await deleteByServiceMutation.mutateAsync(endpoint);
    }
    if (queryKey) {
      console.log({ queryKey });
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    }
    if (endPointBack) router.push(endPointBack);
  };

  return (
    <DropdownMenuItem
      onClick={(e) => {
        handleDelete();
      }}
      className="cursor-pointer text-red-500 hover:!text-red-500"
    >
      <Trash className="h-4 w-4 text-red-500" /> Hapus
    </DropdownMenuItem>
  );
};

export default ModalDelete;
