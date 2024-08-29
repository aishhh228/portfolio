import React from 'react'
import { FaLinkedin, FaGithub,FaFileAlt } from 'react-icons/fa'


function Navbar() {
  return (
    <nav className='mb-18 flex items-center justify-end py-6'>
        <div className='m-8 flex items-center gap-4 text-2xl'>
         <a href="https://linkedin.com/in/aishhh228/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin  className=' text-neutral-400  hover:text-neutral-100 transition-colors duration-300'/>
        </a>

        <a href="https://github.com/aishhh228" target="_blank" rel="noopener noreferrer">
          <FaGithub className=' text-neutral-400  hover:text-neutral-100 transition-colors duration-300'/>
        </a>
        
        <a href="https://drive.google.com/file/d/1k-mMKcb5RppsOiafRUlE8hXwm8P-uXDK/view?usp=drive_link" download="Resume_Aishwarya_Sagavakar.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileAlt className=' text-neutral-400  hover:text-neutral-100 transition-colors duration-300'/>
        </a>
    </div>
    </nav>
  )
}

export default Navbar
