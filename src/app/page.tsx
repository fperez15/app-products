import ProductList from "@/components/ProductList";
import SkeletonLoader from "@/components/SkeletonLoader";
import { getProducts } from "@/services/product";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<SkeletonLoader />}>
        <ProductListWrapper />
      </Suspense>
    </div>
  );
}

async function ProductListWrapper() {
  const initialProducts = await getProducts();
  return <ProductList initialProducts={initialProducts} />;
}
