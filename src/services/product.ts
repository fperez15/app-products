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

