import React from 'react'

import styles from './ButtonSecondary.module.scss';
import Link from 'next/link';

export const ButtonSecondary = ({ text, link }) => {
  return (
    <Link className={styles.buttonSecondary} href={link}>
      {text}
    </Link>
  )
}
