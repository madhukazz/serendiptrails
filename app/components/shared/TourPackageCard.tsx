import Image from "next/image"
import Link from "next/link"
import TourPackageImage from "@/public/assets/images/tourpackage.jpg"

const TourPackageCard = () => {
  return (
    <div className="w-1/3 rounded-xl bg-white shadow-lg">
        <div className="relative">
            <Image className="rounded-t-xl" src={TourPackageImage} alt="tour image" />
            <span className="bg-primary text-white absolute top-5 left-5 p-1 w-24 text-center font-jost font-semibold"><i className="ri-time-line font-normal"></i>13 Nights</span>
        </div>
        <div className="p-5">
            <h3>Ultimate Sri Lanka Multiday Tour – 14 Days</h3>
            <i className="ri-map-pin-line text-secondary"></i>
            <div>
                <Link className="bg-primary p-2 rounded-md text-white w-32 text-center font-semibold" href="/">View All Tour</Link>
                <div>
                    <span>Starting From</span>
                    <span>$2649.80 <span>$3444</span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TourPackageCard