'use client';
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-500 ease-in-out bg-white shadow-lg ${
        isScrolled ? "py-1" : "py-2"
      }`}
    >
      <div className="w mx-auto flex items-center justify-between">
        <Link href="/"><Image className="w-[230px]" src={Logo} alt="Serendiptrails Logo" /></Link>
        <Navbar />
        <div className="flex gap-5">
          <button className="bg-white rounded-full p-2 w-12 h-12 shadow-sm group hover:bg-primary">
            <i className="text-primary text-xl ri-dashboard-line group-hover:text-white transition-all duration-300"></i>
          </button>
          <button className="bg-white rounded-full p-2 w-12 h-12 shadow-sm group hover:bg-primary">
            <i className="text-primary text-xl ri-search-2-line group-hover:text-white transition-all duration-300"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
