import React from 'react'
import AboutImg from '../images/About-img.png'
import {ABOUT_TEXT} from "../utlis/constant"
function Skills() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <h1 className='my-6 text-center text-4xl'>
      About <span className='text-neutral-500'>Me</span>
    </h1>
    <div className='flex flex-wrap lg:flex-nowrap'>
      <div className='w-full lg:w-1/2 lg:p-2'>
        <div className='flex items-center justify-center h-full'>
          <img src={AboutImg} alt="About me" />
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <div className='flex items-center justify-center lg:justify-start h-full'>
          <p className='max-w-xl'>{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills
