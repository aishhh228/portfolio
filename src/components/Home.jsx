import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes
 
} from 'react-icons/fa';


import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
      <h2 className="title-font sm:text-4xl text-3xl font-small text-white animate-bounce">
        Hi,{" "} I'm Aishwarya
        <span className="animate-spin">
                  👋🏻
                </span>
        </h2>
        <p className="text-2xl text-gray-500 py-4 max-w-md" > I love to build amazing websites.</p>

        <div className="flex justify-end items-start">
        <ul className="flex">
          <li> <a href="https://www.linkedin.com/in/aishhh228/">
               <FaLinkedin size={30} />
        </a>
        </li>
        <li>
            <a href="https://github.com/aishhh228 ">
              <FaGithub size={30}/>
            </a>
          </li>
          <li>
            <a href="mailto:aishwaryasagavakar@gmail.com ">
              <HiOutlineMail size={30}/>
            </a>
          </li>
          <li>
            <a href="AishwaryaSagavakarResume.pdf">
              <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
          </ul>
          </div>
      </div>
      
    </div>
    
  </div>
  
  );
};
export default Home;