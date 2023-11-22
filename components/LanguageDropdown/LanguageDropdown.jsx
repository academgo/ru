'use client';
import React, { useState } from 'react';
import styles from './LanguageDropdown.module.scss';
import Link from 'next/link';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const toggleDropdown = () => {
    // Add code to toggle the dropdown if needed
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);

    // Get the current URL
    const currentUrl = window.location.href;

    // Replace "ru." with an empty string to remove it from the URL
    const newUrl = currentUrl.replace('ru.', '');

    // Change the URL without reloading the page
    window.history.replaceState({}, document.title, newUrl);

    // You can also add logic to change the language in your app here
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        {selectedLanguage}
      </div>
      <div className={styles.dropdownMenu}>
        <Link href="#" className={styles.dropdownItem} onClick={() => selectLanguage('RU')}>
          RU
        </Link>
        {/* Add other language links as needed */}
      </div>
    </div>
  );
};

export default LanguageDropdown;
