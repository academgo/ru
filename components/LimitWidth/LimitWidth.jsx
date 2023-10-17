import React from 'react'

export const LimitWidth = ({ children }) => {
  return (
    <div className='w-full md:w-[80%]'>{children}</div>
  )
}
