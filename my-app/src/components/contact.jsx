import React from 'react'
import { GoTriangleDown } from 'react-icons/go';
import { BiPhone, BiShareAlt, BiEnvelope, } from 'react-icons/bi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';
function Contact() {
    return (
        <div className=' my-12 md:mx-32'>
            <h1 className='text-center font-semibold'>Contacts</h1>
            <div className='flex justify-center'>
                <p className=''>.....................</p>
                <GoTriangleDown size={20} className='m-2 text-amber-700' />
                <p>.....................</p>
            </div>
            <div className='flex justify-between mx-8 mt-10'>
                <div className='flex'>
                    <BiEnvelope className='text-amber-700 mt-[2px]'/>
                    <p className='text-sm mx-3'>Email</p>
                </div>
                <div className='flex'>
                    <BiPhone className='text-amber-700 mt-[2px]'/>
                    <p className='text-sm ml-3'>Telephone Number</p>
                </div>
                <div className='flex'>
                    <BiShareAlt className='text-amber-700 mt-[2px]'/>
                    <p className='text-sm ml-3'>Social Media</p>
                </div>
            </div>
            <div className='flex justify-start mt-1 ml-5 '>
                <p className='text-xs'>belaccal@gmail.com</p>
                <p className='text-xs mx-10 md:mx-[350px]'>+234-0805-7363-359</p>
                <div className='flex ml-10'>
                    <a href="https://www.linkedin.com/in/okere-caleb-5526712b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='mx-2 text-amber-700'/></a>
                    <a href="https://x.com/Belaccal?t=wm-Oh3Wg3bAks_enMvBxEQ&s=09"><FaTwitter className='text-amber-700'/></a>
                </div>
            </div>

        </div>
    )
}

export default Contact;
