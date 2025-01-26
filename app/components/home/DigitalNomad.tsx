import Link from "next/link"
import Image from "next/image"
import DigitalNomadImage from "@/public/assets/images/dgital-nomad.png"

const DigitalNomad = () => {
  return (
    <section className="bg-background py-20">
        <div className="w flex items-center justify-between">
            <div className="w-3/5">
                <h5 className="font-raleway text-secondary text-xl font-semibold pb-3">Work, Travel, and Thrive as a Digital Nomad</h5>
                <h2 className="font-bold text-4xl text-secondary">Embark on Your <span className="text-primary">Digital <br /> Nomad</span> Journey</h2>
                <p className="py-8">Work remotely while discovering incredible exeriences! With a vibrant community, reliable infrastructure, and a perfect blend of work-life balance, this destination offers everything a digital nomad needs. Stay productive while exploring breathtaking landscapes, cultural wonders, and unique adventures. Make your remote work exciting by embracing the digital nomad lifestyle—fast Wi-Fi, affordable living, and endless opportunities to explore await you. Whether you need a serene retreat or an energetic city vibe, youll find it here.</p>
                <Link className="button-style p-2 w-44 text-center inline-block rounded-md font-semibold" href="/">Explore More</Link>
            </div>
            <div>
                <Image src={DigitalNomadImage} alt="Digitalnomad-image" />
            </div>
        </div>
    </section>
  )
}

export default DigitalNomad