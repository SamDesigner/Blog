import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { BsChatRightDotsFill } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
const Nav = () => {
  return (
    <div className='px-[20px] py-[20px] border-b border-gray-200'>
        <div className='max-w-[1440px] text-black flex items-center justify-between mx-auto'>
            <div className='flex items-center text-[30px] gap-[12px]'>
            
                    <BsChatRightDotsFill />
                
                    
            
               
                
            </div>
            <ul className='flex text-[16px] text-gray-400 font-[300] gap-[30px]'>
                <li>Home</li>
                <li>Blogs</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* <div className='flex gap-[20px] text-[18px]'>
                <FaInstagram />
                <FaFacebook />
                <FaLinkedin />
                <BsTwitterX />
            </div> */}
        </div>
    </div>
  )
}

export default Nav