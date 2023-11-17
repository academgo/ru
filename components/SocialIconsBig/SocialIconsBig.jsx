import React from 'react'
import styles from './SocialIconsBig.module.scss'
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from 'react-icons/fa'
import Link from 'next/link'

export const SocialIconsBig = ({ align }) => {

  const alignMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  }

  return (
    <div className={`${styles.socialIcons} ${alignMap[align]}`}>
      {/* <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.socialIcon}
      >
        <FaTelegramPlane fontSize="2em" padding="5px" fill="#fff" />
      </Link> */}
      <Link
        href="https://www.instagram.com/academgo.en/"
        target='_blank'
        className={styles.socialIcon}
      >
        <FaInstagram fontSize="2em" padding="5px" fill="#fff" />
      </Link>
      <Link
        href="https://www.facebook.com/academgo"
        target='_blank'
        className={styles.socialIcon}
      >
        <FaFacebookF fontSize="2em" padding="5px" fill="#fff" />
      </Link>
      <Link
        href="https://www.tiktok.com/@academgo.en"
        target='_blank'
        className={styles.socialIcon}
      >
        <FaTiktok fontSize="2em" padding="5px" fill="#fff" />
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=48505118058&text&type=phone_number&app_absent=0"
        target='_blank'
        className={styles.socialIcon}
      >
        <FaWhatsapp fontSize="2em" padding="5px" fill="#fff" />
      </Link>
    </div>
  )
}
