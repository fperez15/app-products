"use client"

import { useProducts } from '@/hooks/useProducts'
import React from 'react'
import ProductCard from './ProductCard';

export default function ProductList() {

    const { data: products, isLoading, error} = useProducts();

    console.log("Productos en ProductList:", products);

    if (isLoading) return <p className='text-center text-gray-500'>Cargando productos</p>
    if (error) return <p className='text-center text-red-500'>❌ Error al cargar los productos</p>
  return (
    <>
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"'>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestros Productos</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
                <ProductCard key={product.sku} product={product} />
            ))}
            </div>
        </div>
    </div>

    </>
  )
}