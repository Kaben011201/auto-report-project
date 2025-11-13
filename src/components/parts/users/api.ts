import { useFormMutation } from "@/hooks/useFormMutation";
import { createUserService, getUsersService } from "@/services/userServices";
import { DataObject } from "@/types/types";
import { useQuery } from "@tanstack/react-query"
import { UserPayload } from "./validation";
import { ResponseDataAttributes } from "@/utilities/responseData";
import sendData from "@/services/sendData";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["useGetUsers"],
    queryFn: async () => {
      const response = await getUsersService();
      return response.data
    },
  });
}

export const useCreateUser = () => {
  return useFormMutation<DataObject<any>, Error, UserPayload>({
    mutationFn: async (
      data
    ): Promise<ResponseDataAttributes<DataObject<any>>> => {
      const response = await sendData(createUserService, data);
      return response;
    },
    loadingMessage: "Membuat data...",
    successMessage: "Data berhasil dibuat",
  });
}

