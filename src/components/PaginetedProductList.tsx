"use client";

import { usePagination } from "@/hooks/usePagination";
import ProductCard from "./ProductCard";

export default function PaginatedProductList() {
  const { paginatedProducts } = usePagination();

  return paginatedProducts.length > 0 ? (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {paginatedProducts.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500 py-10">
      No se encontraron productos.
    </p>
  );
}
