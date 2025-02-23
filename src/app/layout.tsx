import type { Metadata } from "next";
import "./globals.css";
import { youngSerif, firaCode } from "./Fonts";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Devshram",
  description: "A blog about software development",
  icons: { icon: "./Logo 60x60 BG.png" },
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
        <div className="full-height flex flex-col">
          <Header>{children}</Header>
        </div>
      </body>
    </html>
  );
}
