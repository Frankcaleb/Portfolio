import React from 'react'
import { GoTriangleDown } from 'react-icons/go';
import {motion} from "framer-motion";

function Skill() {
    return (
        <motion.div
        initial={{
          opacity:0
      }}
      whileInView={{
          opacity: 1,
          scale:1,
          transition: {
              duration: 3
          }
      }}
      viewport={{
         once: true,
      }}>
       <div className='text-center my-14 mt-10  md:mx-32'>
            <h1 className=' font-semibold'>My skills</h1>
            <div className='flex justify-center'>
            <p className=''>.....................</p>
            <GoTriangleDown size={20} className='m-2 text-amber-700'/>
            <p>.....................</p>
            </div>
            
           
            <div className='text-center mx-44 md:flex justify-center my-12 md:mx-0'>
               <button className='bg-amber-700 rounded-full font-semibold text-white py-7 px-5 md:p-7'>HTML</button>
               <button className='bg-amber-700 rounded-full font-semibold text-white px-7 py-7 my-5 md:p-9 md:mx-5 md:my-0'>CSS</button>
               <button className='bg-amber-700 rounded-full font-semibold text-white py-7 px-8 md:py-9 md:px-10'>JS</button>
               <button className='bg-amber-700 rounded-full font-semibold text-white py-7 px-3 my-5 md:py-9 md:px-5 md:my-0'>Tailwind</button>
               <button className='bg-amber-700 rounded-full font-semibold text-white py-7 px-5 md:p-7'>React</button>

            </div>

        </div>
        </motion.div>
    )
}

export default Skill;
