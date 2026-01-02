import type { Metadata } from "next";
import "./globals.css";
import { youngSerif, firaCode } from "./Fonts";
import Header from "./Header";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import packageJson from "../../package.json";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.VERSION = '${packageJson.version}';`,
          }}
        />
      </head>
      <body
        className={`${youngSerif.className} ${firaCode.className} antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-center bg-transparent relative">
          <BackgroundCanvas />
          <Header footer={<Footer></Footer>} > {children}
          </Header>
        </div>
      </body>
    </html>
  );
}
