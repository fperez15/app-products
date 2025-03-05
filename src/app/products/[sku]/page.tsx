import { getProductBySku } from "@/services/product";
import { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";

interface ProductPageProps {
  params: { sku: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySku(params.sku);

  return {
    title: product ? `${product.name} - Tienda` : "Producto no encontrado",
    description: product ? `Compra ${product.name} al mejor precio.` : "Este producto no está disponible.",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  try {
    const product = await getProductBySku(params.sku);

    if (!product) {
      throw new Error("404 - Producto no encontrado");
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
  } catch (error) {
    console.error("Error en la página", error);
    throw new Error("500 - Error interno del servidor");
  }
}
