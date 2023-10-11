import React from 'react'

import styles from './ButtonSecondary.module.scss';
import Link from 'next/link';

export const ButtonSecondary = ({ text, link }) => {
  return (
    <button className={styles.buttonSecondary}>
      <Link href={link}>
        {text}
      </Link>
    </button>
  )
}
