"use client";

import ProductCard from "./ProductCard";
import { useProductContext } from "@/context/ProductContext";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import { useState, useEffect } from "react";

export default function ProductList() {
  const { products } = useProductContext();
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      setShowNoResults(true);
    } else {
      setShowNoResults(false);
    }
  }, [products]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Nuestros Productos
        </h2>

        <SearchBar />
        <FilterBar />

        {showNoResults ? (
          <div className="text-center text-gray-500 py-10">
            No se encontraron productos con esos filtros.
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.sku} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
