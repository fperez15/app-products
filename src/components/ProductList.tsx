"use client";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import { PaginationProvider } from "@/context/PaginationContext";
import PaginatedProductList from "./PaginetedProductList";
import Pagination from "./Pagination";

export default function ProductList() {
  return (
    <PaginationProvider>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Nuestros Productos
          </h2>

          <SearchBar />
          <FilterBar />

          <PaginatedProductList />

          <Pagination />
        </div>
      </div>
    </PaginationProvider>
  );
}
