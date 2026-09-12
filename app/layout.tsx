import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Six Express | Entregas Expressas",
  description:
    "Entregas expressas com agilidade, segurança, confiança e excelência em Ananindeua, Marituba e Barcarena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
