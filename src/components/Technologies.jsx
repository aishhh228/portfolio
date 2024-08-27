import React from 'react'
import { RiReactjsLine, RiJavascriptFill, RiHtml5Fill, RiCss3Fill } from 'react-icons/ri'

function Technologies() {
  return (
    
    <div className='border-b border-neutral-800 pb-24'>
    <h2 className='my-20 text-center text-4xl'>
        Technologies
    </h2>
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiJavascriptFill className='text-7xl text-yellow-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiHtml5Fill className='text-7xl text-red-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiCss3Fill className='text-7xl text-cyan-400'/>
        </div>
      
    </div>
    </div>
  )
}

export default Technologies
