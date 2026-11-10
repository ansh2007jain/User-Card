import React from 'react'

const Name = ({name,title}) => {
  return (
    <div>
      <div className='flex justify-center mt-2 font-bold text-2xl'>{name}</div>
      <div className='flex justify-center  font-bold text-2xl'>{title}</div>
    </div>
  )
}

export default Name
