import DestinationCard from "../shared/DestinationCard"

const Destinations = () => {
  return (
    <div className="bg-background py-10">
        <div className="w">
            <div className="flex flex-col items-center gap-3 text-center">
                <span className="cursive">Get Ready To</span>
                <h2 className="font-bold text-3xl text-secondary">Explore Top Destination</h2>
                <p className="">Discover Sri Lanka’s most captivating destinations. From cultural landmarks to tranquil beaches, explore the diverse landscapes that <br /> make this island so special.</p>
            </div>
            <div className="mb-5 mt-16 flex gap-5 flex-wrap">
              {Array.from({ length: 6 }).map((_, index) => (
                <DestinationCard key={index} width={ index === 0 || index === 5 ? "w-[48%]" : "w-[23.5%]" } />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Destinations