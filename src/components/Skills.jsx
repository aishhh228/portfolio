import React from 'react'
import AboutImg from '../images/About-img.png'
import {ABOUT_TEXT} from "../utlis/constant"
import { motion } from 'framer-motion'

function Skills() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}  
    className='my-6 text-center text-5xl'>
      About <span className='text-neutral-500'>Me</span>
    </motion.h1>
    <div className='flex flex-wrap lg:flex-nowrap'>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:2}}
      className='w-full lg:w-1/2 lg:p-2'>
        <div className='flex items-center justify-center h-full'>
          <img src={AboutImg} alt="About me" />
        </div>
      </motion.div>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:2}}
      className='w-full lg:w-1/2'>
        <div className='flex font-light tracking-tighter flex-col items-center justify-center lg:justify-start h-full lg:mt-40'>
          <p className='max-w-xl mb-4'>I’m a Software Engineer from Mumbai, India. In 2021 I graduated from the University of Mumbai and got my BE in Computer Science.</p>
          <p className='max-w-xl'>{ABOUT_TEXT}</p>
          <p className='max-w-xl mt-4'>When I’m not at the computer, I’m usually cooking, playing badminton, or hanging out with my family and friends.</p>
        </div>
      </motion.div>
    </div>
  </div>
  )
}

export default Skills
