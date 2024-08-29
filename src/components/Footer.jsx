import React from 'react'

import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className='flex justify-between items-center border-b border-neutral-900 p-4 '>
     
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:0.5}}
       className='lg:mt-10 text-neutral-400 text-xl'>
        <p className='mb-1'>
          © AVS 2024
        </p>
        <p className='text-neutral-400 text-xs'>
          CREATIVE DEVELOPER
        </p>
      </motion.div>

     
      <motion.div 
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:100}}
       transition={{duration:0.5}}
      className='text-neutral-400 text-xs lg:mt-10'>
        <p className='mb-1'>
          Loosely designed in <span className='text-neutral-200 hover:text-purple-500 transition-colors duration-300'>Canva</span> and coded in <span className='text-neutral-200 hover:text-purple-500 transition-colors duration-300'>Visual Studio Code</span> by yours truly.
        </p>
        <p className='mb-1'>
          Built with <span className='text-neutral-200 hover:text-purple-500 transition-colors duration-300'>React.js</span> and <span className='text-neutral-200 hover:text-purple-500 transition-colors duration-300'>Tailwind CSS</span>, deployed with <span className='text-neutral-200 hover:text-purple-500 transition-colors duration-300'>Firebase</span>.
          All text is set in the <span className='text-neutral-200 hover:text-purple-500 transition-colors duration-300'>Inter</span> typeface.
        </p>
       
        
      </motion.div>
    </div>
  )
}

export default Footer
