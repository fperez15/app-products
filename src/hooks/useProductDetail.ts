"use client";

import { useState, useEffect } from "react";
import { getProductBySku } from "@/services/product";
import { Product } from "@/types/product";

export const useProductDetail = (sku: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!sku) throw new Error("SKU inválido");

        const data = await getProductBySku(sku);
        if (!data) {
          setError("404 - Producto no encontrado");
        } else {
          setProduct(data);
        }
      } catch (err) {
        console.error("Error en la página", err);
        setError("500 - Error interno del servidor");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [sku]);

  return { product, loading, error };
};
