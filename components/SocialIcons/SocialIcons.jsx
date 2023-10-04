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

export const SocialIcons = () => {
  return (
    <div className={styles.footerBottomSocial}>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.footerBottomSocialItem}
      >
        <FaTelegramPlane fontSize="1.2em" padding="5px" color="#032540" />
      </Link>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.footerBottomSocialItem}
      >
        <FaInstagram fontSize="1.2em" padding="5px" color="#032540" />
      </Link>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.footerBottomSocialItem}
      >
        <FaFacebookF fontSize="1.2em" padding="5px" color="#032540" />
      </Link>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.footerBottomSocialItem}
      >
        <FaTiktok fontSize="1.2em" padding="5px" color="#032540" />
      </Link>
      <Link
        href="https://t.me/+zLBhFlT7W1Q0MWM0"
        className={styles.footerBottomSocialItem}
      >
        <FaWhatsapp fontSize="1.2em" padding="5px" color="#032540" />
      </Link>
    </div>
  )
}
