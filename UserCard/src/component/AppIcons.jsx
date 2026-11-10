import React from 'react'
import { FaFacebook,FaTwitter,FaSquareYoutube ,FaSquareInstagram } from "react-icons/fa6";
const AppIcons = () => {
  return (
    <div className='flex justify-center gap-4 mt-4 text-2xl'>
      <FaFacebook className='text-blue-800' />
      <FaTwitter className='text-blue-500'/>
      <FaSquareInstagram className='text-pink-600'/>
    <FaSquareYoutube className='text-red-600'/>
    </div>
  )
}

export default AppIcons
