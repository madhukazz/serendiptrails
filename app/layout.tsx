import { Raleway, Montserrat, Jost, Satisfy } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Header from "./components/shared/Header";
import { Metadata } from "next";
import Footer from "./components/shared/Footer";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const satisfy = Satisfy({
  subsets: ["latin"], variable: "--font-satisfy",
  weight: "400"
});
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: "Serendiptrails",
  description: "Serendiptrails is a travel agency that offers the best holiday packages for adventurers, couples, and digital nomads. Discover the best of Sri Lanka with our carefully curated offers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable} ${jost.variable} ${satisfy.variable} scroll-smooth`}>
      <body className="antialiased">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
