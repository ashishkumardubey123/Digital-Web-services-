"use client";

import { motion } from "motion/react";
import { Code, Search, Megaphone } from "lucide-react";
import ourservices from "../data/services.json";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { LucideIcon, ArrowBigRightDash } from "lucide-react";
import { Icon } from "@tabler/icons-react";
import { BackgroundGradient } from "./ui/background-gradient";
import { Lightbulb } from "lucide-react";


import { ul } from "motion/react-client";
import { li } from "motion/react-m";

interface Service {
  id: number;
  icon: LucideIcon;
  name: string;
  description: string;
  points: string[];
}

const services = [
  {
    title: "Web Designing & Development",
    description:
      "We create modern, responsive websites that look professional and convert visitors into customers.",

    icon: Code,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Our SEO strategies help your business rank higher on Google and drive quality organic traffic.",
    icon: Search,
  },
  {
    title: "Social Media Promotion & Content Creation",
    description:
      "We grow your brand on social media with engaging content and result-driven promotion strategies..",
    icon: Megaphone,
  },
];

function ServicesSection() {
  return (
    <section className="py-12 mt-14 bg-gradient-to-b from-blue-950 to-blue-900">
      {/* Heading */}
      <div className="text-center mb-16">
        <p
          className="inline-flex items-center gap-2 rounded-full 
bg-blue-950/10 border border-blue-400/30 
px-5 py-2 text-sm md:text-2xl font-bold 
text-white backdrop-blur-sm"
        >
           <Lightbulb className="md:w-6 md:h-6 w-5 h-5 text-blue-400" />
          What We <span className="text-blue-400">Offer</span>
        </p>
        <h2 className=" font-satoshi-bold text-6xl  font-normal tracking-wide text-white sm:text-8xl">
          Services
        </h2>
        <p className="mt-4 md:text-xl text-gray-300 max-w-xl mx-auto">
          Everything you need to grow your business online from websites to
          visibility.
        </p>
      </div>

      {/* Cards */}

      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.16, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-8 text-center hover:border-blue-400/40 transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-500/10 mb-6">
                <Icon className="w-7 h-7 text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-300 text-sm space-y-1 text-left">
                {ourservices[index]?.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
export default ServicesSection;
