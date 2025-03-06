import { Product } from "@/types/product";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/products";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL, { cache: "no-store" });
  if (!response.ok) throw new Error("Error al obtener los productos");
  return response.json();
};

export const getProductBySku = async (sku: string): Promise<Product | null> => {
  try {
    const response = await axios.get<Product[]>(`${API_URL}?sku=${sku}`);

    if (response.data.length === 0) {
      console.error(`Producto con código ${sku} no encontrado.`);
      return null;
    }

    return response.data[0];
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return null;
  }
};

