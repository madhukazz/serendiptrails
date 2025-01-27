import Image from "next/image"
import contactImage from "@/public/assets/images/contact-page.jpg"

const page = () => {
  return (
    <section className="bg-background pt-40 pb-20">
        <div className="w">
            <div className="flex flex-col items-center text-center gap-3">
                <span className="cursive !text-3xl">Customer Support</span>
                <p>At Serendip Trails, we are committed to providing top-notch customer support to ensure every step of your journey is seamless and enjoyable. Whether you have a question, need assistance with a booking, or simply want to share your travel experiences, our dedicated team is here to help!</p>
            </div>
            <div className="py-16 flex justify-between items-center">
                <div className="w-1/2">
                    <Image className="w-full object-cover" src={contactImage} alt="contact" />
                </div>
                <div>
                    <h1>Contact Info</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page