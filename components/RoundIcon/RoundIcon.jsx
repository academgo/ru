import React from 'react'
import styles from './RoundIcon.module.scss';
import Image from 'next/image';

export const RoundIcon = ({ icon, heading }) => {
  return (
    <div className={styles.roundIcon}>
      <Image
        src={icon}
        width={100}
        height={100}
        alt={heading}
        className={styles.image}
      />
    </div>
  )
}
