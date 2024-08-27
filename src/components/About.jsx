import React from "react";
import '../App.css';
import { ABOUT_ME } from "../utlis/constant";

import profilepic from "../images/Hi_gril.png.png"

const About = () => { 
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
        <h1 className="pb-16 text-4xl lg:mt-6 lg:text-8xl lg:m-4">
        Aishwarya Sagavakar</h1>
        <span className="m-4 mb-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
        <p className="m-4 mt-0 max-w-xl py-6 font-light tracking-tighter">{ABOUT_ME}</p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-2">
          <div className="flex justify-center">
            <img  className="lg:m-[-24px]" src={profilepic} alt="profilepic"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;