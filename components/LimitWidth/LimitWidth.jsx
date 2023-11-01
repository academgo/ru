import React from 'react'

export const LimitWidth = ({ children }) => {
  return (
    <div className='w-full mx-auto md:w-[90%]'>{children}</div>
  )
}