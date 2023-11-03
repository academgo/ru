import React from 'react'
import styles from './SocialIcons.module.scss'
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from 'react-icons/fa'
import Link from 'next/link'

export const SocialIcons = ({ align }) => {

  const alignMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  }

  return (
    <div className={`${styles.socialIcons} ${alignMap[align]}`}>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.socialIcon}
      >
        <FaTelegramPlane fontSize="1.2em" padding="5px" fill="#fff" />
      </Link>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.socialIcon}
      >
        <FaInstagram fontSize="1.2em" padding="5px" fill="#fff" />
      </Link>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.socialIcon}
      >
        <FaFacebookF fontSize="1.2em" padding="5px" fill="#fff" />
      </Link>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.socialIcon}
      >
        <FaTiktok fontSize="1.2em" padding="5px" fill="#fff" />
      </Link>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.socialIcon}
      >
        <FaWhatsapp fontSize="1.2em" padding="5px" fill="#fff" />
      </Link>
    </div>
  )
}
