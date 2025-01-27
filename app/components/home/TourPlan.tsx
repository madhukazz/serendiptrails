import Image from "next/image"
import Link from "next/link"
import TourPlanImage from "@/public/assets/images/tourpackage.jpg"

const TourPlan = () => {
  return (
    <div className="py-10 h-[300px] flex items-center justify-center relative">
        <Image className="w-full h-full object-cover absolute opacity-10" src={TourPlanImage} alt="TourPlanImage"/>
        <div className="w text-center flex flex-col gap-5 items-center absolute">
            <h4 className="font-bold text-3xl text-secondary font-raleway">Start Planning Your Tour</h4>
            <p>🌟 Ready to begin your Sri Lankan exploration? Browse our pre-designed tours or Customize Your Multiday Tour to create the ultimate travel experience.</p>
            <Link className="button-style inline-block py-2 px-3 rounded-md font-jost font-semibold w-52" href="/">Start Your Custom Tour</Link>
        </div>
    </div>
  )
}

export default TourPlan