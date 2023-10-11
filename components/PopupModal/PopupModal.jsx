import React from 'react'
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PopupModal.module.scss';
import { ContactForm } from 'components/ContactForm';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
  },
  content: {
    position: 'relative',
    backgroundColor: '#141319',
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

const PopupModal = ({ isOpen, onClose }) => {
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
            <h2 className={styles.popupTitle}>Contact us</h2>
            <ContactForm
              buttonText="Send message"
            />
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