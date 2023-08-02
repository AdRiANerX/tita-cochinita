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
  robots: "default",
  openGraph: {
    type: "website",
    url: "https://tita-cochinita-de-bario.vercel.app/",
    title: "🌯Tita Cochinita de Barrio🌮",
    description: "🌯La mejor cochinita de barrio se llama Tita🌮",
    siteName: "Tita Cochinita de Barrio",
    images: [
      {
        url: "/img/ogImages/og-image.png",
        alt: "Promocional de Tita Cochinita de Barrio",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-tita-yellow`}>{children}</body>
    </html>
  );
}
