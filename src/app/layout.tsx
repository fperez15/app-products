import type { Metadata } from "next";
import {  Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const outfit = OutfitFont({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = OvoFont({
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "App Products",
  description: "Aplicacion web de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}>
         <Providers> {/* ✅ Ahora `QueryClientProvider` envuelve toda la app */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
