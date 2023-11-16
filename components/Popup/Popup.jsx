"use client";
import { PopupButton } from 'components/PopupButton';
import PopupModal from 'components/PopupModal/PopupModal';
import PopupModalGift from 'components/PopupModalGift/PopupModalGift';
import React, { useState } from 'react';

export const Popup = ({ label, align }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormMessageVisibility = (isVisible) => {
    setIsMessageVisible(isVisible);
    if (!isVisible) {
      closeModal(); // Close the modal when the form message disappears
    }
  };

  const normalizelabel = label.toLowerCase();

  if (normalizelabel === 'get a guide') {
    return (
      <div>
        <PopupButton label={label} align={align} onOpenPopup={openModal} />
        <PopupModalGift isOpen={isModalOpen} onClose={closeModal} onMessageVisibility={handleFormMessageVisibility} />
      </div>
    );
  }

  return (
    <div>
      <PopupButton label={label} align={align} onOpenPopup={openModal} />
      <PopupModal isOpen={isModalOpen} onClose={closeModal} onMessageVisibility={handleFormMessageVisibility} />
    </div>
  );
}