import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
        <div className="w absolute flex flex-col items-center gap-5 z-[1]">
            <h1 className="text-white text-6xl uppercase font-bold text-center">Discover Sri Lanka <br /> Like Never Before</h1>
            <p className="text-white text-md text-center">Uncover the beauty, culture, and adventure of Sri Lanka. From serene beaches to historic landmarks, <br /> let Serendip Trails craft your perfect journey.</p>
            <Link className="button-style  inline-block p-2 w-40 text-center" href='/'>Explore Now</Link>
        </div>
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[600px] object-cover"
        >
        <source src="assets/video/serendiptrails-hero.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Hero