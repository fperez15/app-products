"use client";

import { useState, useEffect, useMemo } from "react";
import { useProductContext } from "@/context/ProductContext";

export default function FilterBar() {
    const { setProducts, allProducts } = useProductContext();

    const safeProducts = useMemo(() => allProducts ?? [], [allProducts]);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const categories = useMemo(() => Array.from(new Set(safeProducts.map((p) => p.category))), [safeProducts]);
    const brands = useMemo(() => Array.from(new Set(safeProducts.map((p) => p.brand))), [safeProducts]);

    useEffect(() => {
        let filtered = [...safeProducts];
    
        if (selectedCategory) {
            filtered = filtered.filter((product) => product.category === selectedCategory);
        }
    
        if (selectedBrand) {
            filtered = filtered.filter((product) => product.brand === selectedBrand);
        }
    
        if (minPrice) {
            filtered = filtered.filter((product) => product.price >= parseFloat(minPrice));
        }
    
        if (maxPrice) {
            filtered = filtered.filter((product) => product.price <= parseFloat(maxPrice));
        }
    
        setProducts(filtered);
    }, [selectedCategory, selectedBrand, minPrice, maxPrice, safeProducts, setProducts]); 

    return (
        <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex flex-wrap gap-4">
                <select
                    className="border p-2 rounded"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Todas las categorías</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <select
                    className="border p-2 rounded"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                >
                    <option value="">Todas las marcas</option>
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Precio mínimo"
                    className="border p-2 rounded"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Precio máximo"
                    className="border p-2 rounded"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                <button
                    className="bg-blue-700 text-white px-4 py-2 rounded"
                    onClick={() => {
                        setSelectedCategory("");
                        setSelectedBrand("");
                        setMinPrice("");
                        setMaxPrice("");
                        setProducts(safeProducts);
                    }}
                >
                    Limpiar filtros
                </button>
            </div>
        </div>
    );
}
