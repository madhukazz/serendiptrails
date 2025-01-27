'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import PlusIcon from "@/public/assets/icons/add-line.svg"
import Image from "next/image";

interface NavItem {
    name: string;
    href: string;
}

const NavItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact-us" },
];

const tourItems: NavItem[] = [
    { name: "Adventure Sports", href: "/adventure-sports-tours" },
    { name: "Honeymoon Packages", href: "/honeymoon-tours" },
    { name: "Multiday Tours", href: "/multiday-tours" },
    { name: "Day Out Packages", href: "/day-out-packages" },
    { name: "Digital Nomad", href: "/digital-nomad" },
    { name: "Custom Tours", href: "/custom-tours" },
];

const Navbar = () => {

    const path: string = usePathname();
    console.log(path);
    

  return (
        <ul className="flex gap-6">
            {NavItems.map((item: NavItem, index: number) => (
                <li className="font-montserrat relative group" key={index}>
                    <Link
                        className={`flex items-center font-semibold uppercase text-sm hover:text-primary transition-all duration-300 group border-none ${path === item.href ? "text-primary" : "text-secondary"}`}
                        href={item.href}
                    >
                        {item.name}
                        {item.name === "Tours" && (
                            <Image className="w-5 h-5 ml-1 text-primary transform transition-transform duration-300 group-hover:rotate-180" src={PlusIcon} alt="plus icon" />
                        )}
                    </Link>

                    {/* Tours submenu */}
                    {item.name === "Tours" && (
                        <ul className="z-10 absolute left-0 invisible group-hover:visible bg-white shadow-lg mt-2 space-y-2 w-[250px]">
                            {tourItems.map((tour: NavItem, index: number) => (
                                <li key={index} className="font-montserrat hover:bg-primary hover:text-white transition-all duration-300 !mt-0">
                                    <Link className="text-sm font-medium inline-block w-full py-2 px-3" href={tour.href}>{tour.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
  )
}

export default Navbar