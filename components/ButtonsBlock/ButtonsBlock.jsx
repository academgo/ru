import { ButtonSecondary } from 'components/ButtonSecondary'
import { Popup } from 'components/Popup'
import React from 'react'

export const ButtonsBlock = () => {
  return (
    <div className='flex items-center gap-12'>
      <Popup label='Связаться' align='left' />
      <ButtonSecondary text='подробнее' link='/about' />
    </div>
  )
}
