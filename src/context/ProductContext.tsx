"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";

interface ProductContextType {
    products: Product[];
    setProducts: (products: Product[]) => void;
    allProducts: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children, initialProducts = [] }: { children: ReactNode; initialProducts?: Product[] }) => {

    const [products, setProducts] = useState<Product[]>(initialProducts || []);
    const [allProducts] = useState<Product[]>(initialProducts || []);

    return (
      <ProductContext.Provider value={{ products, setProducts, allProducts }}>
        {children}
      </ProductContext.Provider>
    );
};

export function useProductContext() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext debe estar dentro de un ProductProvider");
    }
    return context;
}
