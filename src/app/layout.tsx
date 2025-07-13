import type { Metadata } from "next";
import "./globals.css";
import { youngSerif, firaCode } from "./Fonts";
import Header from "./Header";
import Footer from "@/components/Footer";
import ThreeGradientBackground from "@/components/ThreeGradientBackground";

export const metadata: Metadata = {
  title: "Devshram",
  description: "A blog about software development",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${youngSerif.className} ${firaCode.className} antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-center bg-transparent relative">
          <ThreeGradientBackground />
          <Header footer={<Footer></Footer>} > {children} 
          </Header>
        </div>
      </body>
    </html>
  );
}
