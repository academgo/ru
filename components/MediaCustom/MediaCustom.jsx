import React from 'react'
import styles from './MediaCustom.module.scss'
import Image from 'next/image'
import { ImageShadow } from 'components/ImageShadow'

export const MediaCustom = ({ image, titleMark, title, description }) => {
  return (
    <div className={styles.mediaCustom}>
      <div className={styles.mediaCustomWrapper}>
        <div className={styles.mediaCustomImage}>
          {image && (
            <ImageShadow
              src={image}
              alt={title}
              // aspectRatio="square"
              className={styles.image}
            />
          )}
        </div>
        <div className={styles.mediaCustomText}>
          <p className={styles.titleMark}>{titleMark}</p>
          <h3 className={styles.mediaCustomTitle}>
            {title}
          </h3>
          <p className={styles.mediaCustomDescription}>{description}</p>
        </div>
      </div>
    </div>
  )
}
