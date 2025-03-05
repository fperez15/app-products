"use client";

import ProductCard from "./ProductCard";
import { useProductContext } from "@/context/ProductContext";
import SearchBar from "./SearchBar";
import SkeletonLoader from "./SkeletonLoader";
import FilterBar from "./FilterBar";

export default function ProductList() {
  const { products } = useProductContext();

  if (products.length === 0) return <SkeletonLoader />;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Nuestros Productos
        </h2>

        <SearchBar />
        <FilterBar />

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-gray-500">No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}
