import ProductList from "@/app/products/ProductList";
import { getProducts } from "@/services/product";
import { ProductProvider } from "@/context/ProductContext";

export default async function Home() {
  const initialProducts = await getProducts();

  return (
    <ProductProvider initialProducts={initialProducts}>
      <div className="container mx-auto px-4 py-8">
        <ProductList />
      </div>
    </ProductProvider>
  );
}
