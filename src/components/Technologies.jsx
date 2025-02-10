
import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';
import { animate, motion } from 'framer-motion';
import { easeIn } from 'framer-motion/dom';

function getContainerVariants(duration, direction) {
  return {
    hidden: { y: direction === "up" ? 10 : -10 },
    animate: {
      y: direction === "up" ? [-10, 10] : [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
}


const Technologies = () => {
  const techData = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: 'React' },
    { icon: <FaCss3Alt className="text-7xl text-blue-500" />, name: 'CSS' },
    { icon: <SiMongodb className="text-7xl text-green-500" />, name: 'MongoDB' },
    { icon: <FaHtml5 className="text-7xl text-red-500" />, name: 'HTML' },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, name: 'Node.js' },
    { icon: <IoLogoJavascript className="text-7xl text-yellow-500" />, name: 'JavaScript' },
    { icon: <FaJava className="text-7xl text-red-600" />, name: 'Java' },
    { icon: <GrMysql className="text-7xl text-blue-500" />, name: 'MySQL' },
    { icon: <SiExpress className="text-7xl text-gray-500" />, name: 'Express' },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y: -100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y: -100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {techData.map((tech, index) => (
          <motion.div
          variants={getContainerVariants(2.5, tech.direction)}
          initial="hidden"
          animate="animate"
           key={index} className="group relative rounded-2xl border-4 border-neutral-800 p-4">
            {tech.icon}
            <span className="absolute top-full mt-2 hidden w-full text-center text-white group-hover:block">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
