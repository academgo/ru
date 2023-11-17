'use client';
import React from 'react'

import styles from './ScrollLink.module.scss';

export const ScrollLink = ({ text, link }) => {

  const scrollToSection = (sectionId) => {
    // Найдите элемент с указанным id
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Вычислите позицию элемента относительно верхней части страницы
      const offset = sectionElement.offsetTop - 70;
      // Выполните плавный скролл
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button>
      <a onClick={() => scrollToSection(link)} className={styles.scrollLink}>
        {text}
      </a>
    </button>
  )
}
