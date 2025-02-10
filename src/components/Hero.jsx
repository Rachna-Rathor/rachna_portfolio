import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilephoto from "/src/assets/profilephoto.jpg"
import { animate, motion } from "framer-motion";


function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 m-8">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 0.4 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Rachna
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div
         
          className="w-full lg:w-1/2 lg-p-8"
        >
          <div className="flex justify-center">
            <motion.img 
           
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
              className="h-[400px] w-[600px] rounded-2xl"
              src={profilephoto}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
