import Image from "next/image"
import Link from "next/link"
import Image1 from "@/public/assets/images/destination.png"

const DestinationCard = () => {
  return (
    <Link className="font-raleway relative" href="/">
        <Image src={Image1} alt="destination" objectFit="cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3>Destination</h3>
            <span>2 Places</span>
        </div>
    </Link>
  )
}

export default DestinationCard