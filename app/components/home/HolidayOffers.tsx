import HolidayOfferCard from "../shared/HolidayOfferCard"

const HolidayOffers = () => {
  return (
    <section className="pb-14 pt-44 bg-background">
        <div className="w">
            <div className="flex flex-col items-center text-center gap-3">
                <span className="cursive">Best Plan</span>
                <h2 className="font-bold text-2xl text-secondary">Choose Holiday Offer</h2>
                <p>We offer the ideal holiday packages for adventurers, couples, and digital nomads. Discover the best of Sri Lanka with our carefully <br /> curated offers.</p>
            </div>
            <div className="py-16 gap-5 grid grid-cols-3">
                <HolidayOfferCard />
                <HolidayOfferCard />
                <HolidayOfferCard />
                <HolidayOfferCard />
                <HolidayOfferCard />
                <HolidayOfferCard />
            </div>
        </div>
    </section>
  )
}

export default HolidayOffers