import { Product } from '@/types/product'
import Image from 'next/image'
import React from 'react'

interface ProductProps {
    product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
     <div className="group relative bg-white rounded-lg shadow-md p-4">
      <Image
        alt={product.name}
        src={product.image}
        width={300}
        height={300}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 font-bold">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
    
    </>
   
  )
}

export default ProductCard