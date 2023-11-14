import React from 'react'
import styles from './ImageContent.module.scss'
import Image from 'next/image'
import { SocialIcons } from 'components/SocialIcons'
import { ButtonsBlock } from 'components/ButtonsBlock'
import { ImageShadow } from 'components/ImageShadow'

export const ImageContent = ({ image, imageTitle, heading, text, subheading }) => {
  return (
    <div className={styles.imageContent}>
      <div className={styles.imageBlock}>
        <ImageShadow src={image} alt={imageTitle} />
        {/* <Image width={1000} height={1000} src={image} alt={imageTitle} /> */}
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.text} style={{ whiteSpace: 'pre-line' }}>
          <h3>{heading}</h3>
          <div className={styles.textArea} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <div className={styles.elements}>
          <h3>{subheading}</h3>
          <SocialIcons />
          <ButtonsBlock />
        </div>
      </div>
    </div>
  )
}
