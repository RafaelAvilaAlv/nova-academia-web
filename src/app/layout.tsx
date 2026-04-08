import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nova Academia | Educación con excelencia",
    template: "%s | Nova Academia",
  },
  description:
    "Sitio web institucional de Nova Academia, una propuesta educativa moderna enfocada en la excelencia académica, el desarrollo humano y la formación integral.",
  keywords: [
    "Nova Academia",
    "colegio",
    "institución educativa",
    "educación",
    "admisiones",
    "programas académicos",
    "Cuenca",
    "Ecuador",
  ],
  authors: [{ name: "Rafa Alvarez" }],
  creator: "Rafa Alvarez",
  publisher: "Nova Academia",
  metadataBase: new URL("https://nova-academia.vercel.app"),
  openGraph: {
    title: "Nova Academia | Educación con excelencia",
    description:
      "Conoce la propuesta educativa de Nova Academia: programas académicos, admisiones, noticias y contacto.",
    url: "https://nova-academia.vercel.app",
    siteName: "Nova Academia",
    images: [
      {
        url: "/images/Escuela.png",
        width: 1200,
        height: 630,
        alt: "Edificio principal de Nova Academia",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Academia | Educación con excelencia",
    description:
      "Conoce la propuesta educativa de Nova Academia: programas académicos, admisiones, noticias y contacto.",
    images: ["/images/Escuela.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}