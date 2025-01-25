import Link from "next/link"

const TourPackages = () => {
  return (
    <section className="py-20">
        <div className="w">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3">
                    <span className="text-primary font-satisfy text-2xl">Multiday Tours</span>
                    <h2 className="text-secondary text-2xl font-semibold">Explore Sri Lanka in Depth</h2>
                    <p className="font-sm">Experience the best of Sri Lanka with our expertly planned multiday tours, featuring iconic landmarks, hidden gems, and <br /> comfortable accommodations.</p>
                </div>
                <Link className="bg-primary p-2 rounded-md text-white w-32 text-center font-semibold" href="/">View All Tour</Link>
            </div>
        </div>     
    </section>
  )
}

export default TourPackages