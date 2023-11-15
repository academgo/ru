'use client';
import React, { useState, useEffect } from 'react';
import { MdArrowUpward } from "react-icons/md";
import styles from './ScrollToTopButton.module.scss';

export const ScrollToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Показывать кнопку прокрутки, если прокручено больше 300 пикселей
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Добавляем обработчик события прокрутки при монтировании компонента
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Очищаем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Прокрутка наверх при нажатии на кнопку
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scrollToTopButton}>
          <MdArrowUpward color="#fff" fontSize="1.5em" />
        </button>
      )}
    </>
  );
};