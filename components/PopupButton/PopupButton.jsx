"use client";
import React, { useState } from 'react'
import styles from './PopupButton.module.scss'

export const PopupButton = ({ label, align, onOpenPopup }) => {

  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }

  return (
    <div className={alignMap[align]}>
      <button
        onClick={onOpenPopup} // Вызываем функцию для открытия модального окна
        className={styles.popupButton}
      >
        {label}
      </button>
    </div>
  )
}
