import React from "react";
import '../App.css';
import { ABOUT_ME } from "../utlis/constant";
import { motion } from "framer-motion";
import profilepic from "../images/Hi_gril.png.png"


const container = (delay) =>({
    hidden: {x:-100,opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5, delay:delay}
    },
})

const About = () => { 
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
        <motion.h1 variants={container(0)} 
        initial="hidden"  
        animate="visible" 
         className="pb-16 text-6xl lg:mt-6 lg:text-8xl lg:m-4">
        Aishwarya Sagavakar</motion.h1>
        <motion.span
        variants={container(0.5)} 
        initial="hidden"  
        animate="visible" 
        className="m-4 mb-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
        <motion.p variants={container(1)} 
        initial="hidden"  
        animate="visible"  className="m-4 mt-0 max-w-xl py-6 font-light tracking-tighter">{ABOUT_ME}</motion.p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-2">
          <div className="flex justify-center">
            <motion.img  initial={{x:-100,opacity:0}} 
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}
            className="lg:m-[-24px]" src={profilepic} alt="profilepic"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;