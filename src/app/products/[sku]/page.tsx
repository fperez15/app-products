"use client";

import { useProductDetail } from "@/hooks/useProductDetail";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";

export default function ProductPage() {
  const { sku } = useParams(); // ✅ Obtener `params.sku` de forma segura
  const { product, loading, error } = useProductDetail(sku as string);

  if (loading) return <Loader />;

  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-blue-600">404 - Producto no encontrado</h1>
        <p className="text-gray-500 mt-2">Lo sentimos, el producto que buscas no existe o ha sido eliminado.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Breadcrumb category={product.category ?? "General"} productName={product.name} />

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg object-cover w-full"
          priority
        />

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 mt-2">Categoría: {product.category ?? "No especificada"}</p>
          <p className="text-gray-600">Marca: {product.brand}</p>
          <p className="text-xl font-semibold text-blue-600 mt-4">${product.price}</p>
          <p className="text-sm text-gray-500">Stock disponible: {product.stock}</p>
          <p className="text-sm text-yellow-500">⭐ {product.rating} / 5.0</p>
        </div>
      </div>
    </div>
  );
}
