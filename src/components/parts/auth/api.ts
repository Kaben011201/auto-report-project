import { useFormMutation } from "@/hooks/useFormMutation";
import { ResponseDataAttributes } from "@/utilities/responseData";

export const useGithubLogin = () => {
  return useFormMutation<DataObject<any>, Error, any>({
    mutationFn: async (
      data
    ): Promise<ResponseDataAttributes<DataObject<any>>> => {
      const response = await fetch(
        `https://github.com/login/oauth/access_token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          },
          body: JSON.stringify(data),
        }
      );

      const result: ResponseDataAttributes<DataObject<any>> = await response.json();
      return result;
    },
    loadingMessage: "Perbarui data...",
    successMessage: "Data berhasil diperbarui",
  });
};