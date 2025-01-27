import Image from "next/image"
import Link from "next/link"
import HolidayOfferImage from "@/public/assets/images/tourpackage.jpg"

const HolidayOfferCard = () => {
  return (
    <Link className="relative group inline-block overflow-hidden h-[450px] rounded-md" href={`/`}>
        <span className="bg-primary text-white absolute top-5 left-5 inline-block z-[1] font-jost font-semibold py-1 px-2 text-sm rounded-md">$45.00 <span className="line-through text-slate-300">$59.00</span></span>
        <Image className="w-full h-full rounded-md group-hover:rotate-6 object-cover group-hover:scale-150 transition-all duration-1000 brightness-50" src={HolidayOfferImage} alt="Holiday offer" />
        <div className="text-white absolute bottom-0 p-3">
            <h4 className="font-bold font-raleway text-xl">Pinnawala Elephant Orphanage & Royal Botanic Garde</h4>
            <span className="flex items-center gap-3 font-semibold mt-3"><i className="ri-calendar-line"></i>7-8 hours</span>
        </div>
    </Link>
  )
}

export default HolidayOfferCard