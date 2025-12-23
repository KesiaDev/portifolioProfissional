import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duda Rocha | Cultura, Turismo e Marketing Territorial",
  description: "Plataforma profissional de Duda Rocha. Especialista em cultura, turismo, marketing territorial e projetos estratégicos que transformam territórios e conectam pessoas.",
  keywords: ["cultura", "turismo", "marketing territorial", "projetos estratégicos", "desenvolvimento regional"],
  authors: [{ name: "Duda Rocha" }],
  openGraph: {
    title: "Duda Rocha | Cultura, Turismo e Marketing Territorial",
    description: "Transformando territórios através de projetos estratégicos em cultura, turismo e marketing territorial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

