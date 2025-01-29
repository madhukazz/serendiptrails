import TourCard from "@/app/components/tours/TourCard"

const page = () => {
  return (
    <section className="bg-background pt-40 pb-20">
      <div className="w">
          <div className="flex flex-col items-center text-center gap-3">
              <h1 className="font-bold text-4xl text-secondary">Unleash Your Inner Adventurer</h1>
              <p>Get ready for an adrenaline-packed journey across Sri Lanka! Our Adventure Sports Tour is perfect for thrill-seekers who love to explore the outdoors, conquer challenges, and experience the ultimate rush. From water sports to mountain escapades, Sri Lanka’s diverse landscapes offer a perfect playground for adventure lovers.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 py-20">
            <TourCard/>
            <TourCard/>
            <TourCard/>
            <TourCard/>
            <TourCard/>
            <TourCard/>
          </div>
      </div>
    </section>
  )
}

export default page