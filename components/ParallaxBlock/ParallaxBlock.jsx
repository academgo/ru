'use client';
import React, { useEffect } from 'react'
import ParallaxImage from './ParallaxImage';
import styles from './ParallaxBlock.module.scss';
import { Popup } from 'components/Popup';

export const ParallaxBlock = ({ image, title, text }) => {



  return (
    <div className={styles.parallaxBlock}>
      <ParallaxImage image={image} title={title} />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className={styles.parallaxContent}>
          <h2 className="text-white font-bold mb-5 text-4xl md:text-5xl">{title}</h2>
          <p className="text-white mb-8 text-center text-lg">{text}</p>
          <Popup label="contact us" />
        </div>
      </div>
    </div>
  )
}
