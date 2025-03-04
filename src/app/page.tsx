import Footer from "@/component/common/footer";
import HomeHero from "@/component/hero/home-hero";
import AboutSection from "@/component/home/about-section";
import DrinkSection from "@/component/home/drink-section";
import DrinksShowCase from "@/component/home/drinks-show-case";
import RedBullCar from "@/component/home/f1-car";
import F1CarShowCase from "@/component/home/f1-cars-showcase";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HomeHero />
      <RedBullCar />
      <Suspense>
        <F1CarShowCase />
      </Suspense>
      <DrinkSection />
      <Suspense>
        <DrinksShowCase />
      </Suspense>
      <AboutSection />
      <Footer />
    </>
  );
}
