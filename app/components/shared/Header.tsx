import Image from "next/image"
import Logo from "@/public/assets/images/logo.png"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="bg-white py-2 shadow-md">
            <div className="w flex items-center justify-between">
                <Image className="w-[230px]" src={Logo} alt="Serendiptrails Logo" />
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
    )
}

export default Header
