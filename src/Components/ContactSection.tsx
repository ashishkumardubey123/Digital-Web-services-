"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, MessageSquare, MessageCircle, MapPin, ArrowRight, Twitter, Linkedin, Instagram, Github } 
from 'lucide-react';


const ContactSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-[#fdfcff]" id="contact">
      
      {/* 1. Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-[80px] opacity-60" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200/40 to-purple-200/40 rounded-full blur-[80px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* 2. Header Section */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold tracking-wide shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Get In Touch
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Start Your Project?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
           From concept to execution, we create reliable digital experiences that empower businesses to scale with confidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* 3. Left Column: Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-purple-900/10 border border-purple-100/60 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500" />

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-3">
              Send us a message
              <Send className="w-5 h-5 text-purple-500 -rotate-45" />
            </h3>
            
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gray-50/50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="hello@example.com"
                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gray-50/50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 outline-none" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  placeholder="+91 00000 00000"
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gray-50/50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 outline-none" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Project Details</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project goals, timeline, and budget..."
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gray-50/50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 outline-none resize-none" 
                />
              </div>

              <button className="relative w-full py-3 md:py-4 px-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right text-white font-bold text-lg rounded-xl md:rounded-2xl shadow-xl shadow-purple-600/20 hover:shadow-purple-600/30 transition-all duration-500 group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>

            {/* Quick Actions - Side by Side on Mobile */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100 flex flex-row gap-3 md:gap-4">
              <button className="flex-1 py-3 md:py-3.5 px-3 md:px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl md:rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">WhatsApp</span>
              </button>
              <button className="flex-1 py-3 md:py-3.5 px-3 md:px-6 bg-gray-900 hover:bg-black text-white font-bold rounded-xl md:rounded-xl transition-all shadow-lg shadow-gray-900/20 flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Call Now</span>
              </button>
            </div>
          </motion.div>

          {/* 4. Right Column: Stylish Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 lg:pl-6 flex flex-col justify-center h-full space-y-8 md:space-y-10"
          >
            {/* <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Let's build together.</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We are currently operating online. Our remote team is ready to serve you globally.
              </p>
            </div> */}

            {/* Grid Layout: 2 Columns on Mobile, 1 on Large Screens */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-6"> */}
              
              {/* Info Card: Phone */}
              {/* <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-4 md:p-5 rounded-2xl md:rounded-3xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="ml-0 sm:ml-5 w-full">
                  <h4 className="text-[10px] md:text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Call Anytime</h4>
                  <a href="tel:+919302300834" className="text-xs md:text-lg font-bold text-gray-900 hover:text-purple-600 transition-colors block truncate">
                    +91 9302300834
                  </a>
                </div>
              </div> */}

              {/* Info Card: Email */}
              {/* <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-4 md:p-5 rounded-2xl md:rounded-3xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="ml-0 sm:ml-5 w-full">
                  <h4 className="text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">Email Us</h4>
                  <a href="mailto:ad201054@gmail.com" className="text-xs md:text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors block truncate">
                    ad201054@gmail.com
                  </a>
                </div>
              </div> */}

              {/* Info Card: Hours */}
              {/* <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-4 md:p-5 rounded-2xl md:rounded-3xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="ml-0 sm:ml-5 w-full">
                  <h4 className="text-[10px] md:text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">Business Hours</h4>
                  <p className="text-xs md:text-lg font-bold text-gray-900">
                    Mon - Sat: 10 - 7
                  </p>
                </div>
              </div> */}
              
              {/* Info Card: Location */}
              {/* <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-4 md:p-5 rounded-2xl md:rounded-3xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="ml-0 sm:ml-5 w-full">
                  <h4 className="text-[10px] md:text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-xs md:text-lg font-bold text-gray-900">
                    Online / Remote
                  </p>
                </div>
              </div> */}

            {/* </div> */}



             <div className="space-y-8 h-full flex flex-col justify-center py-4">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
        Let's build  <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Together.
          </span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
          Questions? Ideas? Partnership opportunities? We are here to listen and provide the answers you need.
        </p>

        <div className="space-y-5">
          <a href="mailto:ad201054@gmail.com" className="block group">
            <div className="flex items-center gap-5 p-5 rounded-[20px] bg-white/60 border border-white/80 shadow-sm hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-0.5 text-lg">Email Us</h4>
                <p className="text-gray-500 group-hover:text-purple-600 transition-colors">ad201054@gmail.com</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
            </div>
          </a>

          <a href="tel:9302300834" className="block group">
            <div className="flex items-center gap-5 p-5 rounded-[20px] bg-white/60 border border-white/80 shadow-sm hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-0.5 text-lg">Call Us</h4>
                <p className="text-gray-500 group-hover:text-pink-600 transition-colors">9302300834</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
            </div>
          </a>
          
                 <div className="block group cursor-default">
            <div className="flex items-center gap-5 p-5 rounded-[20px] bg-white/60 border border-white/80 shadow-sm hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-0.5 text-lg">Business Hours</h4>
                <p className="text-gray-500 group-hover:text-indigo-600 transition-colors">Monday -Saturday: 10:00AM - 7:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t mx-auto  border-purple-100/50">
        <h4 className="font-semibold   text-gray-900 mb-5 ml-1">Follow our journey</h4>
        <div className="flex gap-4">
          {[
            { Icon: Twitter, href: "#", color: "hover:bg-blue-400" },
            { Icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
            { Icon: Instagram, href: "#", color: "hover:bg-pink-600" },
            { Icon: Github, href: "#", color: "hover:bg-gray-900" }
          ].map(({ Icon, href, color }, index) => (
            <a 
              key={index}
              href={href} 
              className={`w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-white ${color} hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>



          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;