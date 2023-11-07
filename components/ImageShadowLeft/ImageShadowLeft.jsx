import { getAspectRatio } from 'utils/layout'
import React from 'react'
import styles from './ImageShadowLeft.module.scss'
import Image from 'next/image'

export const ImageShadowLeft = ({ src, alt, aspectRatio }) => {
  return (
    <div className={styles.imageShadowLeft}>
      <Image
        width={1000}
        height={1000}
        alt={alt}
        src={src}
        className={getAspectRatio(aspectRatio)}
      />
    </div>
  )
}
