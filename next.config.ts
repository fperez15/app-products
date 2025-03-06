import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "https://firestore.googleapis.com/v1/projects/api-productos-67210/databases/(default)/documents/products",
    NEXT_PUBLIC_API_URL_SINGLE: "https://firestore.googleapis.com/v1/projects/api-productos-67210/databases/(default)/documents/products",
  },
};

export default nextConfig;
