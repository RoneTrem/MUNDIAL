import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "../components/layout/app-shell";

export const metadata: Metadata = {
  title: "PintorPro 360",
  description: "Sistema premium para pintores criarem propostas inteligentes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body><AppShell>{children}</AppShell></body>
    </html>
  );
}
