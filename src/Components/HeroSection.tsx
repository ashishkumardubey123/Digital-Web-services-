"use client";
import Link from "next/link";
import React from "react";
import { LayoutTextFlip } from "@/Components/ui/layout-text-flip";
import { motion } from "motion/react";
// import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import { ChevronRight } from "lucide-react";

import { HoverBorderGradient } from "@/Components/ui/hover-border-gradient";

const words =  "We build reliable digital experiences that transform ideas into strong brands From website development to online visibility, "


function HeroSection() {
  return (
    <div className="relative">
      {/* Background Gradient Blur (ORIGINAL) */}
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>

      <section>
        <div className="relative max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          {/* Left Content */}
          <div className="flex-none space-y-5 max-w-xl">
            {/* News Badge */}
            <Link
              href="/"
            
              className="inline-flex  items-center rounded-full p-1 border  border-slate-400  text-sm font-medium duration-150 hover:bg-slate-200"
            >
              <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-base text-white">
                 Digital Web Services
              </span>
              <p className="flex items-center">
              
          <ChevronRight size={30} strokeWidth={2.5} absoluteStrokeWidth />
              </p>
            </Link>
         

            
         
          
            <div>
          <LayoutTextFlip
          text="We Deliver"
          words={["High-Performing Websites", "Scalable Digital Brands", "Result-Driven Experiences", "Growth-Focused Solutions"]}
        /> 
          

            </div>
      
     
              {/* Description */}
              <p  >
               <TextGenerateEffect words={words}  />
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-x-3 sm:text-sm">
                <Link
                  href="/"
                 
                >
               
                 
             
            <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
      >
  
        <span>Get Started</span> 
         <ChevronRight size={20} strokeWidth={2.5} absoluteStrokeWidth />
      </HoverBorderGradient>


                </Link>

                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
                >
                  Contact sales
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
         
            </div>


          </div>

          {/* Right Image */}
         <div className="flex-1 hidden md:block">
  <video
    src="/hero.mp4"
    className="max-w-xl rounded-xl bg-transparent"
    autoPlay
    loop
    muted
    playsInline
  />
</div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
