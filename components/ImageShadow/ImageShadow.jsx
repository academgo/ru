import React from 'react'
import styles from './ImageShadow.module.scss'
import Image from 'next/image'

export const ImageShadow = ({ src, alt }) => {
  return (
    <div className={styles.imageShadow}>
      <Image width={1000} height={1000} alt="image" src={src} />
    </div>
  )
}
