import React from 'react'

import styles from './ButtonPrimary.module.scss';
import Link from 'next/link';

export const ButtonPrimary = ({ text, link }) => {
  return (
    <Link href={link} className={styles.buttonPrimary}>
      {text}
    </Link>
  )
}
