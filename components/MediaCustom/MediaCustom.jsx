import React from 'react'
import styles from './MediaCustom.module.scss'
import Image from 'next/image'

export const MediaCustom = ({ image, titleMark, title, description }) => {
  return (
    <div className={styles.mediaCustom}>
      <div className={styles.mediaCustomWrapper}>
        <div className={styles.mediaCustomImage}>
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.mediaCustomText}>
          <h3 className={styles.mediaCustomTitle}>
            <span className={styles.titleMark}>{titleMark} </span>
            {title}
          </h3>
          <p className={styles.mediaCustomDescription}>{description}</p>
        </div>
      </div>
    </div>
  )
}
