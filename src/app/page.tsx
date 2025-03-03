import HomeHero from "@/component/hero/home-hero";
import AboutSection from "@/component/home/about-section";
import DrinkSection from "@/component/home/drink-section";

export default function Home() {
  return (
    <>
      <HomeHero />
      <DrinkSection />
      <AboutSection />
    </>
  );
}
