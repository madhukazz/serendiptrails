import Image from "next/image"
import SubscribeImage from "@/public/assets/images/subscribe.webp"
import image1 from "@/public/assets/icons/world.svg"
import image2 from "@/public/assets/icons/Destination.svg"
import image3 from "@/public/assets/icons/medal.svg"
import image4 from "@/public/assets/icons/mountains.svg"

interface CardImage {
    name: string;
    image: string; 
}

const cardImages: CardImage[] = [
    {
        name:"Awesome Tour",
        image:image1
    },
    {
        name:"New Destinations",
        image:image2
    },
    {
        name:"Tailor-Made Tours",
        image:image3
    },
    {
        name:"Best Mountains",
        image:image4
    }
]

const SubscribeSection = () => {
  return (
    <div className="relative flex justify-center h-[700px]">
        <Image className="h-full w-full object-cover" src={SubscribeImage} alt="Subscribe-Image" />
        <div className="w flex justify-center top-1/2 transform -translate-y-1/2 absolute text-white">
            <div className="w-[40%] text-center flex flex-col gap-5">
                <h2 className="font-bold text-5xl">Get 12% OFF Your First TRIP!</h2>
                <p className="text-white text-base font-semibold">Join our newsletter and receive a 12% discount on your first adventure with us. Don’t miss the opportunity to explore Sri Lanka’s wonders.</p>
                <form>
                    <input type="email" className="w-full p-2 rounded-md text-secondary border border-primary font-raleway font-semibold outline-primary text-sm" placeholder="Email Address" />
                    <button className="button-style uppercase inline-block mt-5 p-2 font-semibold text-sm w-full rounded-md">Subscribe</button>
                </form>
            </div>
        </div>
            <div className="w absolute -bottom-28 flex justify-between gap-5 w-full">
                {cardImages.map((card, index) => (
                    <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center justify-center w-[22%] transform hover:-translate-y-10 transition-all duration-500" key={index}>
                        <Image className="w-16" src={card.image} alt={card.name} />
                        <span className="text-secondary font-jost font-semibold mt-5 text-xl">{card.name}</span>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default SubscribeSection