import React from 'react'
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaRegEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from 'react-icons/fa'

import styles from './TheFooter.module.scss';
import Link from 'next/link';
// import { FooterBullet } from '../FooterBullet';
// import { FormMain } from '../FormMain';

// import Logo from '../../assets/logo.png'
import Image from 'next/image';

const footerBullets = [
  'Admission',
  'Visas',
  'Transfers',
  'Residency',
];

export const TheFooter = ({ logo, linksFaq, linksNavigate, linksServices }) => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerTopWrapper}>
            <div className={styles.footerTopLeft}>
              <h3 className={styles.footerTitle}>Study with PoliPathWay</h3>
              <p className={styles.footerDesctiption}>Make the first step into your future right now.</p>
              <div className={styles.footerBullets}>
                {footerBullets.map((bullet, index) => (
                  <FooterBullet key={index} bulletText={bullet} />
                ))}
              </div>
              <div className={styles.footerText}>
                <p>
                  If you have always dreamed of getting an education abroad or migration, don&apos;t shelve that dream! PoliPathWay is here to help you with every step on your pathway. We offer a variety of services that help to make the admission process as easy and comfortable as possible. Don&apos;t miss your opportunity to study abroad!
                </p>
              </div>
              <h4 className={styles.footerSubtitle}>Contact us in any convenient way!</h4>
              <p className={styles.footerDesctiption}>Consulting and support</p>
              <div className={styles.footerContacts}>
                <div className={styles.footerContactsItem}>
                  <div className={styles.footerContactsItemIcon}>
                    <FaTelegramPlane color="#01b8f6" fontSize="1.5em" padding="5px" background="#032540" />
                  </div>
                  <div className={styles.footerContactsItemText}>
                    <Link href="https://t.me/+zLBhFlT7W1Q0MWM0">PoliPathWay</Link>
                  </div>
                </div>
                <div className={styles.footerContactsItem}>
                  <div className={styles.footerContactsItemIcon}>
                    <FaWhatsapp color="#40c351" background="#fff" fontSize="1.5em" />
                  </div>
                  <div className={styles.footerContactsItemText}>
                    <Link href="https://wa.me/message/5EJRNM3WEDXAC1">PoliPathWay</Link>
                  </div>
                </div>
                <div className={styles.footerContactsItem}>
                  <div className={styles.footerContactsItemIcon}>
                    <FaRegEnvelope color="#b00509" fontSize="1.5em" />
                  </div>
                  <div className={styles.footerContactsItemText}>
                    <Link href="mailto:polipathway@gmail.com">polipathway@gmail.com</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerTopRight}>
              <div className={styles.formWrapper}>
                <h3 className={styles.footerTitle}>Have Any Questions?</h3>
                <p className={styles.footerDesctiption}>Fill out the contact form below!</p>
                <FormMain />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className={styles.footerBottomWrapper}>
          <div className={styles.footerBottomGrid}>
            <div className={styles.gridItem}>
              <div className={styles.footerBottomLogo}>
                <Link href="/">
                  <Image
                    src={logo}
                    width={200}
                    height={100}
                    alt="PoliPathWay"
                    className={styles.footerBottomLogoImage}
                  />
                </Link>
              </div>
              <div className={styles.footerBottomText}>
                <p className={styles.text}>
                  We believe that education is a fundamental right and are committed to helping students from different countries and continents.
                  Contact us and take the first step into your successful future!
                </p>
                <p className={styles.footerDesctiption}>Follow us in social media:</p>
              </div>
              <div className={styles.footerBottomSocial}>
                <Link
                  href="https://t.me/+zLBhFlT7W1Q0MWM0"
                  className={styles.footerBottomSocialItem}
                >
                  <FaTelegramPlane fontSize="1.2em" padding="5px" background="#032540" />
                </Link>
                <Link
                  href="https://t.me/+zLBhFlT7W1Q0MWM0"
                  className={styles.footerBottomSocialItem}
                >
                  <FaInstagram fontSize="1.2em" padding="5px" background="#032540" />
                </Link>
                <Link
                  href="https://t.me/+zLBhFlT7W1Q0MWM0"
                  className={styles.footerBottomSocialItem}
                >
                  <FaFacebookF fontSize="1.2em" padding="5px" background="#032540" />
                </Link>
                <Link
                  href="https://t.me/+zLBhFlT7W1Q0MWM0"
                  className={styles.footerBottomSocialItem}
                >
                  <FaTiktok fontSize="1.2em" padding="5px" background="#032540" />
                </Link>
                <Link
                  href="https://t.me/+zLBhFlT7W1Q0MWM0"
                  className={styles.footerBottomSocialItem}
                >
                  <FaWhatsapp fontSize="1.2em" padding="5px" background="#032540" />
                </Link>
              </div>
            </div>
            <div className={styles.gridItem}>
              <h4 className={styles.gridItemSubtitle}>Navigate</h4>
              <ul className={styles.gridItemLinks}>
                {linksNavigate.map((link) => (
                  <li key={link.id} className={styles.gridItemLink}>
                    <Link href={link.destination}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.gridItem}>
              <h4 className={styles.gridItemSubtitle}>Services</h4>
              <ul className={styles.gridItemLinks}>
                {linksServices.map((link) => (
                  <li key={link.id} className={styles.gridItemLink}>
                    <Link href={link.destination}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.gridItem}>
              <h4 className={styles.gridItemSubtitle}>FAQ</h4>
              <ul className={styles.gridItemLinks}>
                {linksFaq.map((link) => (
                  <li key={link.id} className={styles.gridItemLink}>
                    <Link href={link.destination}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.copyrigth}>
            <p>© 2023 PoliPathWay</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
