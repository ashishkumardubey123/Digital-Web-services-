"use client";

import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { MaskContainer } from "@/Components/ui/svg-mask-effect";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
 
      {/* Hero Content */}


        {/* <div className="p-4 relative z-10 w-full text-center"> */}
        {/* <MaskContainer
         revealText={ */}
  <div className="flex flex-col items-center">
    <h1 className="mt-10 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
      Elevate Your Online Presence
    </h1>

    <p className="mt-5 font-normal text-2xl md:text-lg text-neutral-300 max-w-xl mx-auto">
      Crafted to elevate your brand, attract the right audience, and convert
      visitors into loyal customers with cutting-edge technology and proven
      marketing tactics.
    </p>
  </div>
{/* } */}
          {/* className="h text-white dark:text-black"
        >
          With powerful web solutions{" "}
          <span className="text-blue-500">And result-driven</span> Digital
          marketing strategies.{" "}
          <span className="text-blue-500">
            And turn visitors into loyal customers.
          </span> */}
        {/* </MaskContainer> */}
     {/* </div> */}

      {/* CTA Button */}
      <div className="mt-4 relative z-10">
        <Link href="/services">
          <Button className="text-lg font-medium text-white">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
