import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pauli & Martín — Nos casamos",
  description: "Invitación digital de casamiento de Pauli y Martín",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
