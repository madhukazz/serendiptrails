import CustomTour from "@/app/components/tours/CustomTour"
import TourCard from "@/app/components/tours/TourCard"

const page = () => {
  return (
    <section className="bg-background pt-40">
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
          <div>
            <div className="py-10 text-center">
                <h2 className="text-3xl font-bold text-secondary mb-5">Your Adventure, Your Way</h2>
                <p>At Serendip Trails, we believe that every adventurer is unique. With our Custom Adventure Sports Tour option, you can tailor your experience to match your preferences, skill level, and thrill-seeking desires. Whether you’re chasing waves, climbing cliffs, or diving deep into the ocean, we’ll design a one-of-a-kind itinerary just for you.</p>
            </div>
            <div className="grid grid-cols-2 gap-16 py-10">
              <div>
                <h4 className="font-raleway text-2xl font-semibold text-secondary">How It <span className="text-primary ml-1">Works:</span></h4>
                <div className="my-6 space-y-5">
                  <div className="border-2 p-5 rounded-lg flex gap-3 items-center hover:shadow-xl transition-all duration-300">
                    <span className="text-primary text-xl font-raleway font-medium">Share Your Interests</span>
                    <p>Let us know your favorite activities—be it surfing, hiking, rafting, or scuba diving.</p>
                  </div>
                  <div className="border-2 p-5 rounded-lg flex gap-3 items-center hover:shadow-xl transition-all duration-300">
                    <span className="text-primary text-xl font-raleway font-medium">Share Your Interests</span>
                    <p>Let us know your favorite activities—be it surfing, hiking, rafting, or scuba diving.</p>
                  </div>
                  <div className="border-2 p-5 rounded-lg flex gap-3 items-center hover:shadow-xl transition-all duration-300">
                    <span className="text-primary text-xl font-raleway font-medium">Share Your Interests</span>
                    <p>Let us know your favorite activities—be it surfing, hiking, rafting, or scuba diving.</p>
                  </div>
                  <div className="border-2 p-5 rounded-lg flex gap-3 items-center hover:shadow-xl transition-all duration-300">
                    <span className="text-primary text-xl font-raleway font-medium">Share Your Interests</span>
                    <p>Let us know your favorite activities—be it surfing, hiking, rafting, or scuba diving.</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-raleway text-2xl font-semibold text-secondary">Why Customize Your<span className="text-primary ml-1">Adventure Tour?</span></h4>
                <div className="my-6 space-y-5">
                  <div className="border-2 p-5 rounded-lg flex gap-3 items-center hover:shadow-xl transition-all duration-300">
                    <span className="text-primary text-xl font-raleway font-medium">Share Your Interests</span>
                    <p>Let us know your favorite activities—be it surfing, hiking, rafting, or scuba diving.</p>
                  </div>
                  <div className="border-2 p-5 rounded-lg flex gap-3 items-center hover:shadow-xl transition-all duration-300">
                    <span className="text-primary text-xl font-raleway font-medium">Share Your Interests</span>
                    <p>Let us know your favorite activities—be it surfing, hiking, rafting, or scuba diving.</p>
                  </div>
                  <div className="border-2 p-5 rounded-lg flex gap-3 items-center hover:shadow-xl transition-all duration-300">
                    <span className="text-primary text-xl font-raleway font-medium">Share Your Interests</span>
                    <p>Let us know your favorite activities—be it surfing, hiking, rafting, or scuba diving.</p>
                  </div>
                  <div className="border-2 p-5 rounded-lg flex gap-3 items-center hover:shadow-xl transition-all duration-300">
                    <span className="text-primary text-xl font-raleway font-medium">Share Your Interests</span>
                    <p>Let us know your favorite activities—be it surfing, hiking, rafting, or scuba diving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
          <CustomTour />
    </section>
  )
}

export default page