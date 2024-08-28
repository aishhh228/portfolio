import React from 'react'
import { FaLinkedin, FaGithub,FaFileAlt } from 'react-icons/fa'
function Navbar() {
  return (
    <nav className='mb-18 flex items-center justify-end py-6'>
    <div className='m-8 flex items-center gap-4 text-3xl'>
        <a href="https://linkedin.com/in/aishhh228/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin  className='text-blue-500'/>
        </a>

        <a href="https://github.com/aishhh228" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        
        <a href="https://drive.google.com/file/d/1k-mMKcb5RppsOiafRUlE8hXwm8P-uXDK/view?usp=drive_link" download="Resume_Aishwarya_Sagavakar.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileAlt className='text-yellow-300'/>
        </a>
    </div>
    </nav>
  )
}

export default Navbar
