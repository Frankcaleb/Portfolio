import React, { useEffect, useState } from 'react'
import first from "../assets/bg-image.jpg"
import { FaBars, FaX } from 'react-icons/fa6';
import { motion } from "framer-motion";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  function handleScroll(){
    if(window.scrollY >= 100) {
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[])

  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar)
  }
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1
        }
      }}
      viewport={{

      }}>
      <div className='bg-black bg-opacity-50 h-96 w-full relative'>
        <img src={first} alt="" className='w-full object-cover h-96 absolute mix-blend-overlay' />
        <div className={`${scrolled ? "bg-amber-700" : "bg-transparent"}` + 
        ' transition-colors fixed flex flex-row py-5 px-5 items-center top-0 bg-transparent w-full justify-between md:px-32 '}>
          <h1 className='text-white font-semibold text-xl'>Frank Caleb</h1>
          <ul className='hidden text-white text-sm md:flex pt-2'>
            <li className='px-4 hover:ease-in-out hover:border hover:bg-transparent hover:cursor-pointer'>About Me</li>
            <li className='px-4 hover:ease-in-out hover:border hover:bg-transparent hover hover:cursor-pointer'>My Skills</li>
            <li className='px-4 hover:ease-in-out hover:border hover:bg-transparent hover hover:cursor-pointer'>Portfolio</li>
            <li className='px-4 hover:ease-in-out hover:border hover:bg-transparent hover hover:cursor-pointer'>Contacts</li>
          </ul>
          <div onClick={handleClick} className='text-white fixed ml-[410px] mt-2 hover:cursor-pointer md:hidden'>
            {!navbar ? <FaX /> : <FaBars />}
          </div>

        </div>
        <div className={!navbar ? 'fixed top-0 left-0 rounded-r-lg py-10 w-[60%] h-full bg-white md:hidden' : 'fixed top-0 left-[-100%] py-10 w-[60%] h-full bg-white md:hidden'}>
          <h1 className=' font-semibold text-xl px-4'>Frank Caleb</h1>
          <ul className='py-5 font-semibold '>
            <li className='p-4 hover:ease-in-out hover:text-amber-700 hover:cursor-pointer'>About Me</li>
            <li className='p-4 hover:ease-in-out hover:text-amber-700 hover:cursor-pointer'>My Skills</li>
            <li className='p-4 hover:ease-in-out hover:text-amber-700 hover:cursor-pointer'>Portfolio</li>
            <li className='p-4 hover:ease-in-out hover:text-amber-700 hover:cursor-pointer'>Contacts</li>
          </ul>
        </div>
        <div className='text-center text-white pt-44'>
          <h1 className='text-2xl md:text-4xl '>Hi there! My Name is Frank Caleb and <br /> I'm a <span className='text-amber-400'>front-end developer</span> </h1>
        </div>

      </div>

    </motion.div>


  )
}

export default Navbar;