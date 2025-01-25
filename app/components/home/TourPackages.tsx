import Link from "next/link"
import TourPackageCard from "../shared/TourPackageCard"

const TourPackages = () => {
  return (
    <section className="py-20 bg-background">
        <div className="w">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3 w-2/3">
                    <span className="cursive">Multiday Tours</span>
                    <h2 className="text-secondary text-3xl font-semibold">Explore Sri Lanka in Depth</h2>
                    <p className="font-sm">Experience the best of Sri Lanka with our expertly planned multiday tours, featuring iconic landmarks, hidden gems, and comfortable accommodations.</p>
                </div>
                <Link className="bg-primary p-2 rounded-md text-white w-32 text-center font-semibold button-style" href="/">View All Tour</Link>
            </div>
            <div className="mt-20 grid grid-cols-3 gap-10">
                <TourPackageCard />
                <TourPackageCard />
                <TourPackageCard />
                <TourPackageCard />
                <TourPackageCard />
                <TourPackageCard />
            </div>
            <div className="mt-28">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-3 w-2/3">
                        <span className="cursive">Perfect for you</span>
                        <h2 className="text-secondary text-3xl font-semibold">Popular Tour Package</h2>
                        <p className="font-sm">Explore our popular tour packages, carefully designed to give you the best of Sri Lanka. Whether youre an adventurer, a couple, or a culture enthusiast, we have the perfect journey for you.</p>
                    </div>
                    <Link className="bg-primary p-2 rounded-md text-white w-32 text-center font-semibold button-style" href="/">View All Tour</Link>
                </div>
                <div className="mt-20 grid grid-cols-3 gap-10">
                    <TourPackageCard />
                    <TourPackageCard />
                    <TourPackageCard />
                    <TourPackageCard />
                    <TourPackageCard />
                    <TourPackageCard />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TourPackages