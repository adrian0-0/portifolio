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
  title: "Portifólio",
  description: "Site Portifólio de desenvolvedor full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`page ${sora.variable} font-sora text-white relative`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
