import BannerSection from "./components/home/BannerSection";
import Destinations from "./components/home/Destinations";
import DigitalNomad from "./components/home/DigitalNomad";
import Hero from "./components/home/Hero";
import TourPackages from "./components/home/TourPackages";

export default function Home() {
  return (
    <>
      <Hero />
      <TourPackages />
      <BannerSection />
      <Destinations />
      <DigitalNomad />
    </>
  );
}