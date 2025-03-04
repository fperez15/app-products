import { getProducts } from "@/services/product"
import { Product } from "@/types/product"
import { useQuery } from "@tanstack/react-query"


export const useProducts = () => {
    return useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: getProducts,
        staleTime: 1000 * 60 *5,
        
    });
};
