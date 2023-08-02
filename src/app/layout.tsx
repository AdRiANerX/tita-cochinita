import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Tita Cochinita de Barrio",
  description:
    "La mejor cochinita de barrio se llama Tita. Cáele a tita y pide la promo que más te acomode.  Te aseguramos que te encantará nuestro sabor. ",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://tita-cochinita-de-bario.vercel.app",
    title: "Tita Cochinita de Barrio",
    description:
      "🌯 La mejor cochinita de barrio se llama Tita. Cáele a tita y pide la promo que más te acomode.  Te aseguramos que te encantará nuestro sabor. 🌮",
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
        <link
          rel="canonical"
          href="https://tita-cochinita-de-bario.vercel.app"
        />
        <meta name="fb_admins_meta_tag" content="TITALONCHERIA"></meta>
        <meta property="fb:admins" content="TITALONCHERIA"></meta>
      </head>
      <body className={`${inter.className} bg-tita-yellow`}>{children}</body>
    </html>
  );
}
