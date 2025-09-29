import Fleet from "@/components/FleetCard";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portofolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Fleet />
      <Services />
      <Testimonials />
      <Portfolio />
    </>
      
  );
}
