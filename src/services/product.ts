import { Product } from "@/types/product";
import axios from "axios";

const API_URL = "http://localhost:4000/products";

const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error en la API:", error.response?.data || error.message);
    }
    throw new Error(error.response?.data?.message || "Error en la API");
  }
  throw new Error("Error inesperado");
};


export const getProducts = async (): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // se agrega para mostrar el SkeletonLoader 
  const response = await fetch(API_URL, { cache: "no-store" });
  if (!response.ok) throw new Error("Error al obtener los productos");
  return response.json();
};

export const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await axios.get<Product>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const addProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await axios.post<Product>(API_URL, product);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
//   try {
//     const response = await axios.put<Product>(`${API_URL}/${id}`, product);
//     return response.data;
//   } catch (error) {
//     return handleApiError(error);
//   }
// };

// export const deleteProduct = async (id: number): Promise<{ message: string }> => {
//   try {
//     axios.delete(`${API_URL}/${id}`);
//     return { message: "Producto eliminado correctamente." };
//   } catch (error) {
//     return handleApiError(error);
//   }
// };
