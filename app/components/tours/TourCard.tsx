import Image from "next/image"
// import Link from "next/link"
import TourCardImage from "@/public/assets/images/tourCardimage.jpg"

const TourCard = () => {
  return (
    <div>
        <div className="rounded-xl">
            <Image className="rounded-xl" src={TourCardImage} alt="Tour card" />
        </div>
        <div></div>
    </div>
  )
}

export default TourCard