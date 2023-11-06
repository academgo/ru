import React from 'react'

export const SmallWidth = ({ children }) => {
  return (
    <div className='w-full mx-auto md:w-[50%] flex justify-center'>{children}</div>
  )
}
