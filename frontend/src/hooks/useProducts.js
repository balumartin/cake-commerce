import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};