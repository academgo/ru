import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Tabs.module.scss';
import Image from 'next/image';
import { Popup } from 'components/Popup';

const tabContentVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabWrapper}>
      <div className={styles.tabHeaderWrapper}>
        <div className={styles.tabHeader}>
          {tabs ? (
            tabs.map((tab) => (
              <div
                key={tab.titleLittle}
                className={[styles.tabItem, activeTab.titleLittle === tab.titleLittle ? styles.selected : ''].join(' ')}
              >
                <a href='#' onClick={(e) => handleClick(e, tab)}>
                  {tab.titleLittle}
                </a>
                {activeTab.titleLittle === tab.titleLittle && <motion.div layoutId='indicator' className={styles.indicator} />}
              </div>
            ))
          ) : (
            <p>No tabs to display</p>
          )}
        </div>
      </div>
      <div className={styles.tabContent}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab.titleLittle || 'empty'}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.3,
            }}
          >
            <div className={styles.tabInner}>
              <div className={styles.tabBlock}>
                <Image
                  src={activeTab.image}
                  alt={activeTab.titleLittle}
                  width={1000}
                  height={1000}
                  className={styles.tabImage}
                />
              </div>
              <div className={styles.tabBlock}>
                <h3 className={styles.titleFull}>{activeTab.titleFull}</h3>
                <p className={styles.description}>{activeTab.description}</p>
                <Popup label='learn more' />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
