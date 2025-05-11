import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../style/globals.css";
import Provider from "./provider";

const sora = Sora({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Adrian Vinícius Roma Alves | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Adrian Vinícius, desenvolvedor Full Stack com experiência em aplicações modernas, escaláveis e soluções em nuvem.",
  openGraph: {
    title: "Adrian Vinícius Roma Alves | Desenvolvedor Full Stack",
    description:
      "Explore o portfólio de Adrian Vinícius, especializado em desenvolvimento Full Stack e tecnologias de ponta para aplicações web escaláveis.",
    url: "https://www.adrianvinicius.com",
    siteName: "Portfólio Adrian Vinícius",
    images: [
      {
        url: "https://www.adrianvinicius.com/og-base.png",
        width: 1200,
        height: 630,
        alt: "Preview do portfólio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Vinícius Roma Alves | Desenvolvedor Full Stack",
    description:
      "Conheça o portfólio de Adrian Vinícius, com projetos modernos e foco em performance, usabilidade e cloud computing.",
    images: "https://www.adrianvinicius.com/og-twitter.png",
  },
  metadataBase: new URL("https://www.adrianvinicius.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`page ${sora.variable} font-sora text-white relative overflow-x-hidden`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
