import Image from "next/image"
import Link from "next/link"
import Image1 from "@/public/assets/images/destination.png"

interface DestinationCardProps {
    width: string;
}

const DestinationCard = ({width} : DestinationCardProps) => {
  return (
    <Link className={`font-raleway relative ${width} inline-block rounded-md group overflow-hidden`} href="/">
        <Image className="rounded-md group-hover:scale-125 transition-all duration-700 w-full h-full" src={Image1} alt="destination" objectFit="cover" />
        <div className="absolute bottom-5 overflow-hidden transform left-5 text-white shadow-2xl group-hover:translate-y-[-30px] transition-all duration-700">
            <h4 className="font-bold text-xl">Western Province</h4>
            <span className="font-semibold text-lg inline-block translate-y-10 group-hover:translate-y-0 transition-all duration-700">2 Places</span>
        </div>
    </Link>
  )
}

export default DestinationCard