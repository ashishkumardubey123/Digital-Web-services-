"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, Compass, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We start by understanding your business objectives, target audience, and competitive landscape. Through in-depth research and discussions, we identify challenges, opportunities, and the right direction to build a strong foundation for your digital growth.",
    icon: Search,
    colors: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-600",
      iconBg: "bg-purple-100",
      gradient: "from-purple-600 to-indigo-600",
    },
  },
  {
    id: "02",
    title: "Strategy",
    description:
      "Based on our discoveries, we design a clear and actionable strategy. This includes selecting the right technology stack, defining user flows, planning SEO structure, and creating a scalable roadmap aligned with your long-term business goals.",
    icon: Compass,
    colors: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      iconBg: "bg-blue-100",
      gradient: "from-blue-600 to-cyan-600",
    },
  },
  {
    id: "03",
    title: "Development",
    description:
      "Our development team brings the strategy to life with clean, efficient, and scalable code. Using agile methodologies, we ensure rapid iterations, regular updates, performance optimization, and high-quality standards throughout the build process.",
    icon: Code2,
    colors: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-600",
      iconBg: "bg-emerald-100",
      gradient: "from-emerald-600 to-teal-600",
    },
  },
  {
    id: "04",
    title: "Launch & Scale",
    description:
      "After rigorous testing, we launch your product using zero-downtime deployment strategies. Post-launch, we continuously monitor performance, improve user experience, and scale features to support growth, stability, and long-term success.",
    icon: Rocket,
    colors: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-600",
      iconBg: "bg-rose-100",
      gradient: "from-rose-600 to-pink-600",
    },
  },
];


const Step = ({ step, index, setActiveStep }: { step: any, index: number, setActiveStep: (i: number) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  return (
    <div 
      ref={ref} 
      className="min-h-[70vh] flex flex-col justify-center p-6 md:p-12 transition-opacity duration-500"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-md ${isInView ? 'opacity-100 blur-0' : 'opacity-40 blur-[1px]'} transition-all duration-500`}
      >
        <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${step.colors.text}`}>
          Step {step.id}
        </div>
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {step.title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
};

const HowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-gradient-to-b from-purple-50/50 to-white relative py-20">
      
      {/* Centered Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12 lg:mb-20 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-purple-600 font-bold tracking-widest uppercase text-sm"
        >
          Process
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-4xl md:text-5xl font-bold text-gray-900"
        >
          How We Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          From idea to execution, our process is transparent, efficient, and focused on delivering real results.
        </motion.p>
      </div>

      {/* Mobile/Tablet View (Stacked) */}
      <div className="lg:hidden px-4">
        <div className="space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className={`rounded-3xl p-8 border ${step.colors.border} ${step.colors.bg} shadow-sm`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.colors.iconBg}`}>
                    <Icon className={`w-7 h-7 ${step.colors.text}`} />
                  </div>
                  <span className={`text-4xl font-bold ${step.colors.text} opacity-20`}>{step.id}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Desktop View (Sticky Scroll) */}
      <div className="hidden lg:flex max-w-7xl mx-auto">
        
        {/* Left Column: Scrollable Text */}
        <div className="w-1/2 py-10 pl-8">
          <div className="relative border-l border-purple-100 ml-12">
             {/* Steps */}
             {steps.map((step, index) => (
               <Step key={step.id} index={index} step={step} setActiveStep={setActiveStep} />
             ))}
          </div>
        </div>

        {/* Right Column: Sticky Card */}
        <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center p-12">
          <div className="relative w-full max-w-lg aspect-square">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute inset-0 rounded-[2.5rem] p-10 flex flex-col justify-between
                  bg-slate-900 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/20
                  overflow-hidden group hover:border-white/20 transition-colors duration-500`}
              >
                {/* Background Gradients (Kept dark theme logic) */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${steps[activeStep].colors.gradient} opacity-20 blur-3xl rounded-full -mr-16 -mt-16`} />
                <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${steps[activeStep].colors.gradient} opacity-10 blur-3xl rounded-full -ml-16 -mb-16`} />

                {/* Card Content Top */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center 
                      bg-white/5 border border-white/10 backdrop-blur-md
                      shadow-inner`}>
                      {React.createElement(steps[activeStep].icon, { 
                        className: `w-10 h-10 text-white` 
                      })}
                    </div>
                    <div className="text-6xl font-bold text-white/10 font-mono">
                      {steps[activeStep].id}
                    </div>
                  </div>
                </div>

                {/* Card Content Bottom */}
                <div className="relative z-10">
                  <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-white/5 border border-white/10 text-white/90`}>
                    Phase {steps[activeStep].id}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-3">
                    {steps[activeStep].description}
                  </p>
                  <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${steps[activeStep].colors.gradient}`} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;