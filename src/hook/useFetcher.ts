import useSWR from "swr";
import { api } from "@/services/api";

interface IProps {
  url: string;
  condition: boolean;
  options?: string;
}

export function useFetch<T>(url: string, condition = true) {
  const { data, error, mutate, isLoading } = useSWR<T>(
    url,
    async (newUrl: string) => {
      if (!condition) return;
      const { data } = await api.get(newUrl);
      return data;
    }
  );

  return { data, error, mutate, isLoading };
}
