import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const font = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Dormitorio - Decoracion de interior en Pamplona",
  description: "Decoracion de interior especializada en dormitorios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
