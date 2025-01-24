import Image from "next/image"
import Logo from "@/public/assets/images/logo.png"
import Link from "next/link";

interface NavItem {
    name: string;
    href: string;
}

const NavItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/" },
    { name: "Destinations", href: "/" },
    { name: "Gallery", href: "/" },
    { name: "Contact Us", href: "/" },
];

const Header = () => {
  return (
    <header className="bg-white py-2">
        <div className="w">
            <Image className="w-[250px]" src={Logo} alt="Serendiptrails Logo" />
            <ul>
                {NavItems.map((item: NavItem, index: number) => (
                    <li key={index}><Link href={item.href}>{item.name}</Link></li>
                ))}
            </ul>
        </div>
    </header>
  )
}

export default Header