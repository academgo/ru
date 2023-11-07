import React from 'react'
import styles from "./Price.module.scss";
import { RoundIcon } from 'components/RoundIcon';
import { Popup } from 'components/Popup';

export const Price = ({ icon, heading, text, items, cost, subtext }) => {
  return (
    <div className={styles.price}>
      <div className={styles.iconBlock}>
        <RoundIcon icon={icon} heading={heading} />
      </div>
      <div className={styles.priceBody}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>{text}</p>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.cost}>€{cost}</p>
        <p className={styles.subtext}>{subtext}</p>
        <div className={styles.buttonBlock}>
          <Popup label="Choose" />
        </div>
      </div>
    </div>
  )
}
