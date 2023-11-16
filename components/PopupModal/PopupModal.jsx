'use client';
import React from 'react'
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PopupModal.module.scss';
import { ContactForm } from 'components/ContactForm';

import { SocialIconsBig } from 'components/SocialIconsBig';
import { SocialIcons } from 'components/SocialIcons';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(20, 50, 88, 0.7)',
    zIndex: 999,
  },
  content: {
    position: 'relative',
    backgroundColor: 'rgba(20, 50, 88, 0.7)',
    padding: '20px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    inset: '0',
  },
};

const PopupModal = ({ isOpen, onClose, onMessageVisibility }) => {
  return (
    <AnimatePresence>
      <Modal
        closeTimeoutMS={50}
        isOpen={isOpen} // Состояние открытия модального окна
        onRequestClose={onClose} // Функция для закрытия модального окна
        style={customStyles}
        ariaHideApp={false}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={styles.popupContent}>
            <div className={styles.popupContentWrapper}>
              <div className={styles.imageBlock}>
                <img className={styles.mainImage} src="/assets/form-image1.webp" alt="form image" />
                {/* Псевдоэлемент ::before для создания накладываемого фона */}
                <div
                  className={styles.overlay}
                  style={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
                <div className={styles.imageContent}>
                  <h3 className={styles.imageContentTitle}>Start your journey</h3>
                  <img className={styles.imageContentLogo} src="/assets/logo-academgo.webp" alt="logo" />
                </div>
              </div>
              <div className={styles.formBlock}>
                <h2 className={styles.popupTitle}>Contact us</h2>
                <ContactForm
                  buttonText="Send"
                  onMessageVisibility={onMessageVisibility}
                />
                <SocialIcons />
              </div>
            </div>
          </div>
        </motion.div>
        <button className={styles.closeButton} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15 1L1 15M1.00001 1L15 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </Modal>
    </AnimatePresence>
  );
}

export default PopupModal;