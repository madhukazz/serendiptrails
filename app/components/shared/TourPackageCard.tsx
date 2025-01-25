import Image from "next/image"
import Link from "next/link"
import TourPackageImage from "@/public/assets/images/tourpackage.jpg"

const TourPackageCard = () => {
  return (
    <div className="rounded-xl bg-white shadow-lg group">
        <div className="relative">
            <Image className="rounded-t-xl" src={TourPackageImage} alt="tour image" />
            <span className="bg-primary text-white absolute top-5 left-5 p-1 w-24 text-center text-sm font-jost font-semibold rounded-md"><i className="ri-time-line font-normal mr-1"></i>13 Nights</span>
        </div>
        <div className="p-5 flex flex-col gap-4">
            <h3 className="font-semibold text-xl">Ultimate Sri Lanka Multiday Tour – 14 Days</h3>
            <div>
                <i className="ri-map-pin-line text-secondary"></i>
                <span className="text-secondary font-jost">Kandy, Nuwara Eliya, Ella, Mirissa</span>
            </div>
            <div className="flex justify-between items-center mt-2">
                <Link className="p-2 rounded-md w-32 text-center font-semibold text-primary bg-white border border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300" href="/">Book Now <i className="ri-arrow-right-long-line inline-block transform group-hover:translate-x-1 transition-all duration-100"></i></Link>
                <div className="flex flex-col items-end">
                    <span className="text-secondary font-semibold text-base font-jost">Starting From</span>
                    <span className="text-primary font-bold font-raleway text-xl">$2649.80 <span className="line-through">$3444</span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TourPackageCard