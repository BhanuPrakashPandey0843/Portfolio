'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const [subtitle, setSubtitle] = useState('');
  const fullSubtitle = 'Hi, I’m Bhanu Prakash Pandey — Software Developer building the future of tech.';

  useEffect(() => {
    let idx = 0;
    const typing = setInterval(() => {
      setSubtitle(fullSubtitle.slice(0, idx++));
      if (idx > fullSubtitle.length) clearInterval(typing);
    }, 40);
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#0f0f1a] via-[#0b0b13] to-black text-white flex items-center justify-center px-6 overflow-hidden font-sans">
      {/* Background Glow Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[450px] h-[120px] top-10 left-10 bg-gradient-to-br from-[#331F5C] to-[#2D2A8A] opacity-30 rounded-full rotate-[-25deg] blur-3xl" />
        <div className="absolute w-[300px] h-[100px] top-20 right-10 bg-gradient-to-br from-[#FFC371] to-[#FF5F6D] opacity-20 rounded-full rotate-[25deg] blur-2xl" />
        <div className="absolute w-[350px] h-[120px] bottom-10 left-10 bg-gradient-to-br from-[#9D4EDD] to-[#7B2CBF] opacity-20 rounded-full rotate-[-25deg] blur-2xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-2xl" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white/10 to-transparent opacity-10" />
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { background-position: -200%; }
          100% { background-position: 200%; }
        }
        .shine-animation {
          animation: shine 2.5s linear infinite;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(90deg, #60efff, #b586f7, #60efff);
          background-size: 200% 100%;
          background-repeat: no-repeat;
        }
      `}</style>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="z-10 text-center space-y-6 max-w-2xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center px-4 py-1 rounded-full bg-[#232323] text-sm shadow-lg"
        >
          <span className="text-xs font-semibold text-pink-500 mr-2 bg-[#5a189a] px-2 py-[2px] rounded-full uppercase">New</span>
          <span className="text-gray-300">Chatbot Available</span>
        </motion.div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="text-white">Coder</span>
          <span className="text-[#8758FF]">X</span>
          <span className="shine-animation">Dreamer</span>
        </h1>

        {/* Typing Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl text-gray-400 font-light min-h-[50px]"
        >
          {subtitle}<span className="animate-pulse text-white">|</span>
        </motion.p>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition shadow-xl"
          >
            Let’s Connect <FaArrowRight className="ml-2" />
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-gray-300 bg-[#1e1e1e] px-4 py-2 rounded-full shadow-inner select-text"
          >
            <FiCopy className="cursor-pointer hover:text-white" />
            <span className="text-sm">bhanupandey0843@gmail.com</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
