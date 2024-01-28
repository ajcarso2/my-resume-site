import React from 'react';
import styles from '../app/styles/SimpleButton.module.css'; // Assuming you have a CSS module for styles

const SimpleButton = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
    return (
        <button className={styles.simpleButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default SimpleButton;
