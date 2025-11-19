import { useFormMutation } from "@/hooks/useFormMutation";
import sendData from "@/services/sendData";
import sendDataService from "@/services/sendData";
import { ResponseDataAttributes } from "@/utilities/responseData";

// export const useDelete = () => {
//   return useFormMutation<
//     ApiResponse<DataObject<any>>,
//     Error,
//     { endpoint: string }
//   >({
//     mutationFn: async (data): Promise<ApiResponse<DataObject<any>>> => {
//       const delay = new Promise((resolve) => setTimeout(resolve, 2000));

//       const [result] = await Promise.all([
//         sendData(data.endpoint, {}, "DELETE") as Promise<
//           ApiResponse<DataObject<any>>
//         >,
//         delay,
//       ]);

//       return result;
//     },
//     confirmMessage: {
//       title: "Yakin ingin menghapus",
//       description: "Data yang dihapus secara permanen tidak dapat dikembalikan",
//     },
//     loadingMessage: "Menghapus data...",
//     successMessage: "Data berhasil dihapus",
//   });
// };

export const useDeleteByService = () => {
  return useFormMutation<
    ResponseDataAttributes<DataObject<any>>,
    Error,
    () => Promise<ResponseDataAttributes<any>>
  >({
    mutationFn: async (
      service
    ): Promise<ResponseDataAttributes<DataObject<any>>> => {
      const response = await sendDataService(service, {});

      return response;
    },
    confirmMessage: {
      title: "Yakin ingin menghapus",
      description: "Data yang dihapus secara permanen tidak dapat dikembalikan",
    },
    loadingMessage: "Menghapus data...",
    successMessage: "Data berhasil dihapus",
  });
};
