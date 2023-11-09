import React from 'react'
import styles from './MediaRightBlock.module.scss';
import { ImageShadow } from 'components/ImageShadow';
import Link from 'next/link';
import { Popup } from 'components/Popup';

export const MediaRightBlock = ({
  image,
  pretitle,
  title,
  textStart,
  items,
  textEnd,
  linkLabel,
  linkDestination,
  buttonLabel }) => {
  return (
    <div className={styles.block}>
      <div className={styles.blockContent}>
        <div className={styles.content}>
          <h4 className={styles.pretitle}>{pretitle}</h4>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{textStart}</p>
          <ul className={styles.items}>
            {items.map((item) => (
              <li key={item} className={styles.item}>{item}</li>
            ))}
          </ul>
          <p className={styles.text}>{textEnd}</p>
        </div>
        <div className={styles.elements}>
          {linkLabel && (
            <Link href={linkDestination} className={styles.link}>
              {linkLabel}
            </Link>
          )}
          {buttonLabel && (
            <Popup label={buttonLabel} />
          )}
        </div>
      </div>
      <div className={styles.blockImage}>
        <ImageShadow src={image} alt={pretitle} />
      </div>
    </div>
  )
}
