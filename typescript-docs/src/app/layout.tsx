import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ListOfTopics from "./components/ListOfTopics/ListOfTopics";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html>
        <head>
          {/* Any additional head content here, like meta tags or link tags */}
        </head>
        <body>
          <Navbar />
          <ListOfTopics />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
