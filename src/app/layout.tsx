import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Tita Cochinita de Barrio",
  description: "La mejor cochinita de barrio se llama Tita",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-tita-yellow`}>{children}</body>
    </html>
  );
}
