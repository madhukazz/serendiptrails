import Image from "next/image"
import Link from "next/link"
import TourCardImage from "@/public/assets/images/tourCardimage.jpg"

const TourCard = () => {
  return (
    <div className="shadow-xl group rounded-b-xl">
        <div className="rounded-t-xl relative">
            <Image className="rounded-t-xl object-cover" src={TourCardImage} alt="Tour card" />
            <span className="bg-white text-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 py-2 px-12 w-fit text-center text-base font-jost font-semibold rounded-3xl shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-300"><i className="ri-time-line font-normal mr-1"></i>13 Nights</span>
        </div>
        <div className="py-10 px-6 flex flex-col gap-5 group-hover:bg-green-50 transition-all duration-300 rounded-b-xl">
            <h4 className="font-raleway font-semibold text-xl text-secondary">Kitulgala Adventure Day – White Water Rafting</h4>
            <div className="flex flex-col">
                <span className="font-jost text-lg font-normal">Starting From</span>
                <div>
                    <span className="text-primary font-bold font-raleway text-xl">$2649.80 <span className="line-through">$3444</span></span>
                    <span className="font-jost text-lg font-normal ml-3">Per person</span>
                </div>
            </div>
            <Link 
                className="p-2 rounded-3xl w-32 text-center font-semibold text-primary inline-block bg-white border border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300" 
                href="adventure-sports-tours/kitulgala-adventure-day-white-water-rafting-canyoning">Book Now 
                <i className="ri-arrow-right-long-line inline-block transform group-hover:translate-x-1 transition-all duration-100"></i>
            </Link>
        </div>
    </div>
  )
}

export default TourCard