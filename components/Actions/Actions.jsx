import React from 'react'
import styles from './Actions.module.scss';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";

export const Actions = ({ slides, number, heading, description }) => {
  // console.log("SLIDES", slides);
  return (
    <div className={styles.actionsBlock}>
      {/* <div className={styles.actionsBg}>
        <Image
          src={bgImage}
          alt={bgImageAlt}
          fill
          className={styles.actionsBgImage}
        />
      </div> */}
      <div className={styles.actionsWrapper}>
        <div className={styles.actionsHeader}>
          <h2 className={styles.actionsHeading}>{heading}</h2>
          <p className={styles.actionsDescription}>{description}</p>
        </div>
        <div className={styles.actions}>
          {slides.map((slide) => (
            <div
              className={styles.action}
              key={slide.title}>
              {/* <div className={styles.actionIcon}>
                <Image
                  src={slide.icon}
                  width={100}
                  height={100}
                  alt={slide.title}
                  className={styles.actionImage}
                />
              </div> */}
              <div className={styles.actionNumber}>{slide.number}</div>
              <div className={styles.actionContent}>
                <h3 className={styles.actionTitle}>{slide.title}</h3>
                <p className={styles.actionText}>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
