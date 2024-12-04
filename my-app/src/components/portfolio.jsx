import React from 'react'
import { GoTriangleDown } from 'react-icons/go';
import Ahava from "../assets/ahava.jpg";
import Hospital from "../assets/hospital.jpg";
import Commerce from "../assets/ecommerce.jpg";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 3
        }
      }}
      viewport={{
        once: true,
      }}>
      <div className='text-center my-12 mx-10 md:mx-32'>
        <h1 className=' font-semibold'>Portfolio</h1>
        <div className='flex justify-center'>
          <p className=''>.....................</p>
          <GoTriangleDown size={20} className='m-2 text-amber-700' />
          <p>.....................</p>
        </div>
        <div className='my-10 mx-14 md:mx-0 md:flex justify-center'>
          <a href="https://food-app-y7nk.vercel.app/"><img src={Ahava} alt="" className='w-80 rounded-lg hover:ease-in-out cursor-pointer hover:shadow-lg' /></a>
          <a href="https://e-commerce-kappa-five-75.vercel.app/"><img src={Commerce} alt="" className='w-80 rounded-lg hover:ease-in-out cursor-pointer hover:shadow-lg my-10 mx-0 md:my-0 md:mx-10' /></a>
          <a href="https://hospital-ekah.vercel.app/"><img src={Hospital} alt="" className='w-80 rounded-2xl hover:ease-in-out cursor-pointer hover:shadow-lg' /></a>

        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio;