import React from 'react'
import styles from './IconLeftBlock.module.scss';
import { FaTelegramPlane, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

const iconMap = {
  "FaTelegramPlane": FaTelegramPlane,
  "FaWhatsapp": FaWhatsapp,
  "FaRegEnvelope": FaRegEnvelope
};

export const IconLeftBlock = ({ icon, iconColor, textStart, textContinue, textData }) => {
  return (
    <div className='flex items-center flex-wrap gap-8 mb-4'>
      <div className='flex items-center gap-5'>
        {icon && React.createElement(iconMap[icon], { color: iconColor, size: "3em" })}
        {textStart && <p className='text-xl text-gray-400'>{textStart}</p>}
        {textContinue && <p className='text-xl text-white'>{textContinue}</p>}
      </div>
      <div className=''>
        {textData && <p className='text-xl text-white font-semibold'>{textData}</p>}
      </div>
    </div>
  )
}
