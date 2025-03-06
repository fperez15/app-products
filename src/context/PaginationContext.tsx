"use client";

import { createContext, useState, ReactNode } from "react";
import { useProductContext } from "@/context/ProductContext";
import { Product } from "@/types/product";

const PRODUCTS_PER_PAGE = 8;

export interface PaginationContextType {
  currentPage: number;
  totalPages: number;
  paginatedProducts: Product[];
  handlePageChange: (page: number) => void;
}

export const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

export function PaginationProvider({ children }: { children: ReactNode }) {
  const { products } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);

  const safeProducts: Product[] = products ?? [];

  const totalPages = Math.ceil(safeProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = safeProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <PaginationContext.Provider value={{ currentPage, totalPages, paginatedProducts, handlePageChange }}>
      {children}
    </PaginationContext.Provider>
  );
}
