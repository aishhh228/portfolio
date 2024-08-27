import React from 'react'
import { FaLinkedin, FaGithub,FaFileAlt } from 'react-icons/fa'
function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-end py-6'>

   
    <div className='m-8 flex items-center gap-4 text-2xl'>
      <FaLinkedin />
      <FaGithub />
      <FaFileAlt />
    </div>
    </nav>
  )
}

export default Navbar
