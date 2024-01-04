'use client'
import React, { useState, useEffect } from 'react';
import styles from './CookieConsent.module.scss';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, было ли согласие на использование куки принято
    const isConsentAccepted = localStorage.getItem('cookieConsentAccepted') === 'true';
    setShowBanner(!isConsentAccepted);
  }, []);

  const handleAccept = () => {
    // При клике на "Принять", сохраняем состояние в localStorage,
    // чтобы сообщение больше не отображалось после обновления страницы
    localStorage.setItem('cookieConsentAccepted', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    // При клике на "Отказаться", удаляем состояние из localStorage,
    // чтобы сообщение о согласии на использование куки снова появлялось
    localStorage.removeItem('cookieConsentAccepted');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={styles.cookieBanner}>
      <p>Этот веб-сайт использует файлы cookie для улучшения вашего опыта.</p>
      <div className={styles.cookieBannerButtons}>
        <button className={styles.buttonCookies} onClick={handleAccept}>Принять</button>
        <button className={styles.buttonCookies} onClick={handleDecline}>Отклонить</button>
      </div>
    </div>
  );
};

export default CookieConsent;
