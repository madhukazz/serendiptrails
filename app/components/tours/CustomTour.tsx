import Link from "next/link"
import Image from "next/image"
import SubscribeImage from "@/public/assets/images/subscribe.webp"

const CustomTour = () => {
  return (
    <div className="relative flex justify-center h-[400px]">
        <Image className="h-full w-full object-cover opacity-15" src={SubscribeImage} alt="Subscribe-Image" />
        <div className="w flex justify-center top-1/2 transform -translate-y-1/2 absolute flex-col gap-5 items-center">
            <h4 className="font-montserrat text-2xl font-bold text-secondary">Start Planning Your Custom Adventure Tour:</h4>
            <p>🌟 Take the first step towards your personalized adventure today! Fill out our Custom Adventure Tour Form and let us create a journey that pushes your limits and leaves you inspired.</p>
            <Link className="button-style w-fit py-2 px-3 rounded-xl font-semibold" href="/custom-tours">Customize Your Adventure</Link>
        </div>
    </div>
  )
}

export default CustomTour