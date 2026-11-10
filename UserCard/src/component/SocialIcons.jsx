import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { BiSolidShare } from "react-icons/bi";


const SocialIcons = () => {
  return (
    <div className=' flex justify-center items-center mt-8 gap-5 font-bold text-xl'>
      <span className='flex items-center gap-1'> <FaHeart className='text-red-500'/> <p>60.4K</p> <div className='flex items-center pl-1 mb-1 h-2 w-0.5 text-black-200'>|</div></span> 
      <span className='flex  items-center gap-1'> <FiMessageCircle /> <p>6.5K</p> <div className='flex items-center pl-1 mb-1 h-2 w-0.5 text-black-200'>|</div></span>
      <span className='flex items-center gap-1'> <BiSolidShare /> <p>56.4K</p></span>
      
      
    </div>
  )
}

export default SocialIcons
