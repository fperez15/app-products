"use client";

import { PaginationContext } from "@/context/PaginationContext";
import { useContext } from "react";


export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("Paginacion no disponible, verifique");
  }
  return context;
}
