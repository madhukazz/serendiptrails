import { Raleway, Montserrat, Jost, Satisfy } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Header from "./components/shared/Header";
import { Metadata } from "next";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const satisfy = Satisfy({
  subsets: ["latin"], variable: "--font-satisfy",
  weight: "400"
});
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: "Serendiptrails",
  description: "Digital Marketing",
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
      </body>
    </html>
  );
}
