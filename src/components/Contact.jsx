import React from 'react'
import { CONTACT } from '../utlis/constant'
import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
    className='my-20 text-center text-4xl'>
       Living, Learning, & Leveling up one day at a time.
    </motion.h2>
    <div className='text-center tracking-tighter'>
        <motion.p 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1}}
        className='my-4'>
        {CONTACT.address}
        </motion.p>
        <div className='flex justify-center text-3xl gap-4 mb-20'>
        <a href={`mailto:${CONTACT.email}`} >
          <MdEmail className=' text-neutral-400 hover:text-purple-600 transition-colors duration-300'/>
        </a>
        <a href="https://linkedin.com/in/aishhh228/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin  className=' text-neutral-400 hover:text-purple-600 transition-colors duration-300'/>
        </a>

        <a href="https://github.com/aishhh228" target="_blank" rel="noopener noreferrer">
          <FaGithub  className=' text-neutral-400  hover:text-purple-600 transition-colors duration-300'/>
        </a>
        </div>
      
        
    </div>
    </div>
  )
}

export default Contact
