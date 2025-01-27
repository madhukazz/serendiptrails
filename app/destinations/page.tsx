import DestinationCard from "../components/shared/DestinationCard"

const page = () => {
  return (
    <section className="bg-background py-20">
        <div className="w">
            <div className="flex flex-col items-center text-center gap-3">
                <span className="cursive">Get Ready To</span>
                <h1 className="font-bold text-5xl text-secondary">Explore Top Destination</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making <br /> it over 2000 years old</p>
            </div>
            <div className="py-16 grid grid-cols-4 gap-3">
                <DestinationCard style="h-[300px]" />
                <DestinationCard style="h-[300px]" />
                <DestinationCard style="h-[300px]" />
                <DestinationCard style="h-[300px]" />
                <DestinationCard style="h-[300px]" />
                <DestinationCard style="h-[300px]" />
                <DestinationCard style="h-[300px]" />
                <DestinationCard style="h-[300px]" />
            </div>
        </div>
    </section>
  )
}

export default page