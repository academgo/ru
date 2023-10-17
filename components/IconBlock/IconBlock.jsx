import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import styles from './IconBlock.module.scss';
import { FaGraduationCap, FaRegMessage, FaUserPlus } from "react-icons/fa6";

const iconMap = {
  "FaGraduationCap": FaGraduationCap,
  "FaRegMessage": FaRegMessage,
  "FaUserPlus": FaUserPlus
};

export const IconBlock = ({ icon, title, text }) => {
  return (
    <div className={styles.iconBlock}>
      <div className={styles.iconBlockIcon}>
        {icon && React.createElement(iconMap[icon], { color: "#ffa800", size: "3em" })}
      </div>
      <div className={styles.iconBlockText}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  );
};