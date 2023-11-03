import React from 'react'
import styles from './GiftBlock.module.scss'
import { Popup } from 'components/Popup'
import Image from 'next/image'

export const GiftBlock = ({ imageBg, imageBgAlt, heading, headingHighlight, description, image, imageAlt }) => {
  return (
    <div className={styles.giftBlock}>
      <Image
        src={imageBg}
        alt={imageBgAlt}
        // width={2500}
        // height={1080}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
        className={styles.giftBlockBg}
      />
      <div className={styles.giftBlockWrapper}>
        <h2 className={styles.giftBlockHeading}>
          {heading}
          {headingHighlight && <span className={styles.headingHighlight}>{headingHighlight}</span>}
        </h2>
        <p className={styles.giftBlockDescription}>{description}</p>
        <Popup label='get a guide' align='center' />
        <Image
          src={image}
          alt={imageAlt}
          width={500}
          height={500}
          quality={100}
          // fill
          // sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          className={styles.giftBlockImage}
        />
      </div>
    </div>
  )
}
