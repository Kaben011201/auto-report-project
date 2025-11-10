import { getUsersService } from "@/services/userServices";
import { useQuery } from "@tanstack/react-query"

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["useGetUsers"],
    queryFn: async () => {
      const response = await getUsersService();
      return response.data
    },
  });
}