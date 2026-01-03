

import Herosection from "@/Components/HeroSection";
import HowWeWork from "@/Components/HowWeWork";


import ServicesSection from "@/Components/ServicesSection";

import StatsSection from "@/Components/StatsSection";
import WhyChooseUs from "@/Components/whayChoseUs";

export default function Home() {
  return (
      
      
<main
  className="min-h-screen font-satoshi antialiased bg-grid-white/[0.02]"
  style={{
    background:
      "linear-gradient(143.6deg, rgba(29, 78, 216, 0) 20.79%, rgba(29, 78, 216, 0.28) 40.92%, rgba(29, 78, 216, 0) 70.35%)",
  }}
>
  
        <Herosection/>
        <StatsSection/>
        {/* <Our_services/> */}
        <ServicesSection/>
        <WhyChooseUs/>
        <HowWeWork/>
    
 
</main>
    
  
  );
}
