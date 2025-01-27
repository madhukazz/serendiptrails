import BlogImage from "@/public/assets/images/tourpackage.jpg"
import FtLogo from "@/public/assets/images/logo-ft.png"
import Image from "next/image"
import Link from "next/link"
import ScrollToTop from "./ScrollTop";

interface QuickLinksInterface {
    name: string;
    path: string;
}

const QuickLinks : QuickLinksInterface[] = [
    {name:'About us', path:'/'},
    {name:'Contact Us', path:'/'},
    {name:'Custom Tours', path:'/'},
    {name:'Language Request', path:'/'},
    {name:'Gallery', path:'/'},
    {name:'Blog', path:'/'},
    {name:'FAQ', path:'/'},
    {name:'Terms & Conditions', path:'/'},
    {name:'Privacy Policy', path:'/'},
]
const TourType : QuickLinksInterface[] = [
    {name:'City Tour', path:'/'},
    {name:'Hill Town', path:'/'},
    {name:'Family', path:'/'},
    {name:'Adventure', path:'/'},
    {name:'Escorted Tour', path:'/'},
    {name:'Couple', path:'/'},
]

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="relative bg-[#2d373c]">
        <div className="relative">
            <Image className="absolute w-full h-full object-cover opacity-5 z-0" src={BlogImage} alt="Footer background image" />
            <div className="w">
                <div className="flex justify-between gap-10 py-20">
                    <div className="flex flex-col space-y-5 w-[35%] z-[1]">
                        <Image className="object-cover w-52" src={FtLogo} alt="Footer logo" />
                        <p className="text-white">Discover the beauty of adventure with Serendip Trails. From scenic tours to immersive cultural experiences, we bring you the best of what the world has to offer. Whether you &apos;re seeking a family getaway or an adrenaline-filled adventure, we’ve got you covered.</p>
                        <span className="text-primary font-raleway font-medium">Working Day : 24/7</span>
                        <div>
                            <h5 className="font-montserrat font-semibold text-2xl text-white">Follow Us On :</h5>
                            <div className="flex space-x-3 items-center mt-5">
                                <Link className="button-style w-9 h-9 rounded-full flex items-center justify-center" href={``}><i className="ri-instagram-line"></i></Link>
                                <Link className="button-style w-9 h-9 rounded-full flex items-center justify-center" href={``}><i className="ri-facebook-line"></i></Link>
                                <Link className="button-style w-9 h-9 rounded-full flex items-center justify-center" href={``}><i className="ri-whatsapp-line"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15%]">
                        <h5 className="font-montserrat font-semibold text-xl text-white">Quick Links</h5>
                        <div className="mt-10 flex flex-col gap-2">
                            {QuickLinks.map((link, index) => (
                                <Link className="relative text-white font-semibold font-raleway text-sm inline-block w-fit before:absolute before:bottom-0 before:h-[2px] before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-500" key={index} href={link.path}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-[15%]">
                        <h5 className="font-montserrat font-semibold text-xl text-white">Tour Type</h5>
                        <div className="mt-10 flex flex-col gap-2">
                            {TourType.map((link, index) => (
                                <Link className="relative text-white font-semibold font-raleway text-sm inline-block w-fit before:absolute before:bottom-0 before:h-[2px] before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-500" key={index} href={link.path}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-[15%] z-[1]">
                        <h5 className="font-montserrat font-semibold text-xl text-white">Contact Us</h5>
                        <div className="mt-10 flex flex-col gap-2">
                            <Link className="font-raleway text-white font-medium hover:text-primary transition-all duration-300" href="tel:+94 76 600 7388"><i className="ri-phone-fill"></i> +94 76 600 7388</Link>
                            <Link className="font-raleway text-white font-medium hover:text-primary transition-all duration-300" href="mailto:hello@serendiptrails.com"><i className="ri-mail-fill"></i> hello@serendiptrails.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#162b32] py-4 flex items-center justify-center">
            <p className="text-white text-center text-sm">{`© ${year} Serendip Trails | Design By Hela Bitz`}</p>
        </div>
        <ScrollToTop />
    </footer>
  )
}

export default Footer