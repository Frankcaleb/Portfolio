import React from 'react'
import { GoTriangleDown } from 'react-icons/go';
import resume from "../assets/Resume.pdf"


function Hero() {

 
  return (
   
    <div className='text-center my-12 mx-10 md:mx-32'>
      <h1 className=' font-semibold'>About Me</h1>
      <div className='flex justify-center'>
            <p className=''>.....................</p>
            <GoTriangleDown size={20} className='m-2 text-amber-700'/>
            <p>.....................</p>
            </div>
            
      <p className='text-sm text-balance mt-10 md:px-32 '>I'm a frontend developer with 1 year of experience, I create webpage interface that enhance user experience. I use tools like react, js and tailwind to develop user interface
        with good browser and search engine optimzation. I have good communication skill, and I'm also time efficient. I look forward to working with other developers to create projects.
      </p>
    <a href={resume} download="Resume"><button className='bg-amber-700 text-white hover:text-black font-semibold px-5 py-2 mt-10 text-sm  rounded-full hover:ease-in-out hover:bg-transparent hover:border-amber-900 hover:border hover:cursor-pointer'>Download My CV</button></a>
    </div>
  
  )
}

export default Hero;