import HeroSection from "@/Components/HeroSection";
import { main } from "motion/react-client";
import Herosection from "@/Components/HeroSection";
import Image from "next/image";
import Our_services from "@/Components/Our_services";

export default function Home() {
  return (
      
<main className="min-h-screen bg-black/[0.96] antialiased  bg-grid-white/[0.02]">
     
        <Herosection/>
        <Our_services/>
    
 
</main>
    
  
  );
}
