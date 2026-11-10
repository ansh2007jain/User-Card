import React from 'react'

const ProfilePhoto = ({Url}) => {
  return (
    <div >   
        <div className='flex justify-center mt-10'><img className='h-28 w-28 rounded-full' src={Url} alt="Photo" /></div>
         
    </div>
  )
}

export default ProfilePhoto
