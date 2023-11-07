'use client';
import React, { useEffect, useRef } from 'react';
import styles from './BlockShadow.module.scss';

export const BlockShadow = ({ children }) => {
  const blockRef = useRef(null);

  // Set the height of all block elements to the height of the tallest block element
  // This is to ensure that the shadow is the same height for all block elements
  // Этот хук устанавливает высоту всех блочных элементов в высоту самого высокого блочного элемента
  useEffect(() => {
    const blockElements = document.querySelectorAll(`.${styles.blockShadow}`);
    const maxHeight = Math.max(...Array.from(blockElements, (el) => el.clientHeight));
    Array.from(blockElements, (el) => (el.style.height = `${maxHeight}px`));
  }, []);

  return (
    <div ref={blockRef} className={styles.blockShadow}>
      {children}
    </div>
  );
};
