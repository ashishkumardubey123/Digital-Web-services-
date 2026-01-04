"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#fdfcff]" id="contact">
      
      {/* 1. Creative Background Elements (The "Theme" Vibe) */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Top Right Pink/Purple Glow */}
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-[80px] opacity-60" />
         {/* Bottom Left Indigo Glow */}
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200/40 to-purple-200/40 rounded-full blur-[80px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* 2. Header Section */}
        <div className="text-center mb-16 lg:mb-20">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gray-900">Start Your Project?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
           From concept to execution, we create reliable digital experiences that empower businesses to scale with confidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 3. Left Column: The "Premium" Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-purple-900/10 border border-purple-100/60 relative overflow-hidden group"
          >
            {/* Subtle Gradient Overlay on Card */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500" />

            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              Send us a message
              <Send className="w-5 h-5 text-purple-500 -rotate-45" />
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="hello@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 outline-none" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  placeholder="+91 00000 00000"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 outline-none" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Project Details</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project goals, timeline, and budget..."
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 outline-none resize-none" 
                />
              </div>

              <button className="relative w-full py-4 px-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right text-white font-bold text-lg rounded-2xl shadow-xl shadow-purple-600/20 hover:shadow-purple-600/30 transition-all duration-500 group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>

            {/* Quick Actions */}
            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 py-3.5 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2.5">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </button>
              <button className="flex-1 py-3.5 px-6 bg-gray-900 hover:bg-black text-white font-bold rounded-xl transition-all shadow-lg shadow-gray-900/20 flex items-center justify-center gap-2.5">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
            </div>
          </motion.div>

          {/* 4. Right Column: Stylish Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 lg:pl-6 flex flex-col justify-center h-full space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Start build something amazing together.</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are currently operating online Our remote team is ready to serve you globally.
              </p>
            </div>

            <div className="space-y-6">
              {/* Info Card: Phone */}
              <div className="flex items-center p-5 rounded-3xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Call Anytime</h4>
                  <a href="tel:+919354734436" className="text-lg font-bold text-gray-900 hover:text-purple-600 transition-colors">
                    +91 9302300834
                  </a>
                </div>
              </div>

              {/* Info Card: Email */}
              <div className="flex items-center p-5 rounded-3xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">Email Us</h4>
                  <a href="mailto:hello@codexprime.in" className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                    ad201054@gmail.com
                  </a>
                </div>
              </div>

              {/* Info Card: Hours */}
              <div className="flex items-center p-5 rounded-3xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">Business Hours</h4>
                  <p className="text-lg font-bold text-gray-900">
                    Mon - Sat: 10AM - 7PM
                  </p>
                </div>
              </div>
              
              {/* Info Card: Location */}
              <div className="flex items-center p-5 rounded-3xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-bold text-gray-900">
                    Online / Remote
                  </p>
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