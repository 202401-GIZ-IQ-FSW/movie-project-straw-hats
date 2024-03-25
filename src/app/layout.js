import { Inter } from "next/font/google";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./globals.css";
import Providers from "./providers";
import { Children } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "straw-hats",
  description: "movie-project-straw-hats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Providers>
           <Header />
           {children}
           <Footer />
         </Providers>
      </body>
    </html>
  );
}
