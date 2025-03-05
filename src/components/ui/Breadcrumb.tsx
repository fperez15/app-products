"use client";

import Link from "next/link";

interface BreadcrumbProps {
  category: string;
  productName: string;
}

export default function Breadcrumb({ category, productName }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link href="/" className="hover:text-gray-700">Inicio</Link> /
      <Link href={`/products?category=${category}`} className="hover:text-gray-700"> {category} </Link> /
      <span className="text-gray-900">{productName}</span>
    </nav>
  );
}
