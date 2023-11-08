'use client';
import React, { useEffect, useRef } from 'react';
import styles from "./Price.module.scss";
import { RoundIcon } from 'components/RoundIcon';
import { Popup } from 'components/Popup';

export const Price = ({ icon, heading, headingSmall, text, items, cost, subtext }) => {

  const blockRef = useRef(null);

  useEffect(() => {
    const blockElements = document.querySelectorAll(`.${styles.priceBody}`);
    const maxHeight = Math.max(...Array.from(blockElements, (el) => el.clientHeight));
    Array.from(blockElements, (el) => (el.style.height = `${maxHeight}px`));
  }, []);

  return (
    <div className={styles.price}>
      <div className={styles.iconBlock}>
        <RoundIcon icon={icon} heading={heading} />
      </div>
      <div ref={blockRef} className={styles.priceBody}>
        {heading && <h3 className={styles.heading}>{heading}</h3>}
        {headingSmall && <h3 className={styles.headingSmall}>{headingSmall}</h3>}
        <p className={styles.text}>{text}</p>
        {items && (
          <ul className={styles.items}>
            {items.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {cost && (
          <>
            <p className={styles.cost}>€{cost}</p>
            <p className={styles.subtext}>{subtext}</p>
            <div className={styles.buttonBlock}>
              <Popup label="Choose" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
