"use client";

import React from 'react';
import FancyButton from '../components/FancyButton';
import SimpleButton from '../components/SimpleButton';
import styles from './styles/Page.module.css';

const Page = () => {
  const handleFancyClick = () => {
    console.log('Fancy button clicked!');
  };

  const handleSimpleClick = () => {
    console.log('Simple button clicked!');
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.buttonContainer}>
        <FancyButton onClick={handleFancyClick} />
        <SimpleButton onClick={handleSimpleClick}>Simple</SimpleButton>
      </div>
    </div>
  );
};

export default Page;
