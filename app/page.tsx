import BannerSection from "./components/home/BannerSection";
import Blog from "./components/home/Blog";
import Destinations from "./components/home/Destinations";
import DigitalNomad from "./components/home/DigitalNomad";
import Hero from "./components/home/Hero";
import HolidayOffers from "./components/home/HolidayOffers";
import SubscribeSection from "./components/home/SubscribeSection";
import TourPackages from "./components/home/TourPackages";
import TourPlan from "./components/home/TourPlan";

export default function Home() {
  return (
    <>
      <Hero />
      <TourPackages />
      <BannerSection />
      <Destinations />
      <DigitalNomad />
      <SubscribeSection />
      <HolidayOffers />
      <Blog />
      <TourPlan />
    </>
  );
}