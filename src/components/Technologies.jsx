import React from 'react'
import { RiReactjsLine, RiJavascriptFill, RiHtml5Fill, RiCss3Fill, RiGithubFill} from 'react-icons/ri'
import { SiMysql } from "react-icons/si";
import {  motion } from 'framer-motion'


const iconVariants = (duration) =>({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",

    },
  },
});

function Technologies() {
  return (
    
    <div className='border-b border-neutral-800 pb-24'>
    <motion.h2
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
    className='my-20 text-center text-4xl'>
        Technologies
    </motion.h2>
    <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration: 1.5}}
    
    className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiJavascriptFill className='text-7xl text-yellow-400'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiHtml5Fill className='text-7xl text-red-500'/>
        </motion.div>
        <motion.div
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiCss3Fill className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div
         variants={iconVariants(1)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiGithubFill className='text-7xl'/>
        </motion.div>
        <motion.div
         variants={iconVariants(1)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiMysql className='text-7xl text-yellow-400'/>
        </motion.div>
      
    </motion.div>
    </div>
  )
}

export default Technologies
