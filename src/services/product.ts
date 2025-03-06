import { Product } from "@/types/product";
import { FirestoreDocument } from "@/types/firestore";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/products";
const API_URL_SINGLE = process.env.NEXT_PUBLIC_API_URL_SINGLE || "http://localhost:4000/products";

const isProduction = process.env.NEXT_PUBLIC_API_URL?.includes("firestore.googleapis.com");

const normalizeFirestoreProduct = (data: FirestoreDocument): Product => {

  const fields = data.fields;
  const product = {
    sku: fields.sku.stringValue,
    name: fields.name.stringValue,
    category: fields.category.stringValue,
    brand: fields.brand.stringValue,
    price: fields.price.doubleValue || parseFloat(fields.price.integerValue || "0"),
    stock: parseInt(fields.stock.integerValue, 10),
    rating: fields.rating.doubleValue || parseFloat(fields.rating.integerValue || "0"),
    image: fields.image.stringValue,
  };
  return product;
};

export const getProducts = async (): Promise<Product[]> => {
  try {
      
    const response = await fetch(API_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Error al obtener los productos: ${response.statusText}`);
    }

    const data = await response.json();

    if (!isProduction) {
      return Array.isArray(data.products) ? data.products : [];
    }

    if (!data.documents || !Array.isArray(data.documents)) {
      console.warn(" No se encontraron documentos en Firestore.");
      return [];
    }
    const formattedProducts = data.documents.map((doc: FirestoreDocument) => {
      const fields = doc.fields;
      
      return {
        sku: fields.sku?.stringValue || "N/A",
        name: fields.name?.stringValue || "Sin nombre",
        category: fields.category?.stringValue || "Sin categoría",
        brand: fields.brand?.stringValue || "Sin marca",
        price: fields.price?.doubleValue ?? parseFloat(fields.price?.integerValue || "0"),
        stock: parseInt(fields.stock?.integerValue || "0", 10),
        rating: fields.rating?.doubleValue ?? parseFloat(fields.rating?.integerValue || "0"),
        image: fields.image?.stringValue || "/images/default.jpg",
      };
    });

    return formattedProducts;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};

export const getProductBySku = async (sku: string): Promise<Product | null> => {
  try {

    const response = await fetch(`${API_URL_SINGLE}/${sku}`);

    if (!response.ok) {
      throw new Error(`Producto con SKU ${sku} no encontrado. ${response.statusText}`);
    }

    const data = await response.json();

    if (!isProduction) {
      return data.products.find((p: Product) => p.sku === sku) || null;
    }
    return normalizeFirestoreProduct(data);
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return null;
  }
};
