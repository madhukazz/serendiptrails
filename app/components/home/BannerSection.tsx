import BannerImage from "@/public/assets/images/home-banner.jpg"
import Image from "next/image"
import Link from "next/link"

const BannerSection = () => {
  return (
    <div className="bg-background py-10">
        <div className="w h-[400px] relative">
            <Image className="w-full h-full rounded-lg object-cover brightness-[0.5]" src={BannerImage} alt="Banner Image" />
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white gap-3 flex flex-col">
                <span className="cursive">Customizable Tours</span>
                <h4 className="font-raleway text-3xl font-bold">Your Adventure, Your Way</h4>
                <p className="text-white font-medium text-md">Design a personalized journey tailored to your preferences. Choose your destinations, activities, and travel pace for a unique travel experience.</p>
                <Link className="button-style py-2 px-4 inline-block rounded-md w-fit font-jost font-semibold" href="/">Start Customizing Now</Link>
            </div>
        </div>
    </div>
  )
}

export default BannerSection