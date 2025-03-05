"use client";

import { useState } from "react";
import { useProductContext } from "@/context/ProductContext";

export default function SearchBar() {
    const { allProducts, setProducts } = useProductContext();
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);

        if (!searchQuery.trim()) {
            setProducts(allProducts);
        } else {
            setProducts(
                allProducts.filter((product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    };

    return (
        <div className="mb-4 flex justify-center">
            <input
                type="text"
                placeholder="Buscar productos..."
                className="border p-2 w-full rounded"
                value={query}
                onChange={handleSearch}
            />
        </div>
    );
}
