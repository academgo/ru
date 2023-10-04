import React from 'react'

import styles from './ButtonSecondary.module.scss';
import Link from 'next/link';

export const ButtonSecondary = ({ text, link }) => {
  return (
    <Link href={link} className={styles.buttonSecondary}>
      {text}
    </Link>
  )
}
