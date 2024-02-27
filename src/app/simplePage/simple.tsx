"use client";

import React from 'react';
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
      <h2>Hello</h2>
    </div>
  );
};

export default Page;
