import Image from "next/image"
import contactImage from "@/public/assets/images/contact-page.jpg"
import Link from "next/link"

const page = () => {
  return (
    <section className="bg-background pt-40 pb-20">
        <div className="w">
            <div className="flex flex-col items-center text-center gap-3">
                <span className="cursive !text-3xl">Customer Support</span>
                <p>At Serendip Trails, we are committed to providing top-notch customer support to ensure every step of your journey is seamless and enjoyable. Whether you have a question, need assistance with a booking, or simply want to share your travel experiences, our dedicated team is here to help!</p>
            </div>
            <div className="py-16 flex items-center relative">
                <div className="w-1/2">
                    <Image className="w-full object-cover" src={contactImage} alt="contact" />
                </div>
                <div className="bg-white absolute right-16 p-10 shadow-xl rounded-xl flex flex-col gap-8 w-1/2">
                    <h1 className="font-bold text-3xl relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-20 before:h-[3px] before:mt-2 before:block before:bg-gradient-to-r before:from-primary before:to-transparent before:rounded-md">Contact Info.</h1>
                    <div className="flex flex-col shadow-lg p-5 rounded-md rounded-tr-[3.5rem] hover:bg-[#00152b] transition-all duration-500 hover:text-white group">
                        <h6 className="font-raleway text-lg font-semibold text-secondary mb-3 group-hover:text-white">Let&apos;s Talk</h6>
                        <Link className="font-jost font-medium mb-2 text-paragraph group-hover:text-white" target="_blank" href={`mailto:hello@serendiptrails.com`}>hello@serendiptrails.com</Link>
                        <Link className="font-jost font-medium text-paragraph group-hover:text-white" target="_blank" href={`https://wa.me/94766007388`}>+94 76 600 7388</Link>
                    </div>
                    <div className="flex flex-col shadow-lg p-5 rounded-md rounded-tr-[3.5rem] hover:bg-[#00152b] transition-all duration-500 hover:text-white group">
                        <h6 className="font-raleway text-lg font-semibold text-secondary mb-3 group-hover:text-white">Visit Us.</h6>
                        <Link className="font-jost text-paragraph group-hover:text-white font-medium mb-2" target="_blank" href={`https://www.facebook.com/serendiptrails`}><strong>Facebook:</strong> https://www.facebook.com/serendiptrails</Link>
                        <Link className="font-jost text-paragraph group-hover:text-white font-medium mb-2" target="_blank" href={`https://www.instagram.com/serendiptrails`}><strong>Instagram:</strong> https://www.instagram.com/serendiptrails</Link>
                        <Link className="font-jost text-paragraph group-hover:text-white font-medium" target="_blank" href={`https://www.linkedin.com/company/serendip-trails`}><strong>LinkedIn:</strong> https://www.linkedin.com/company/serendip-trails</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page