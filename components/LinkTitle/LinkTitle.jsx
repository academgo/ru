import React from 'react'
import styles from './LinkTitle.module.scss';
import Link from 'next/link';

export const LinkTitle = ({ label, destination }) => {
  return (
    <Link className={styles.linkTitle} href={destination}>
      {label}
    </Link>
  )
}
