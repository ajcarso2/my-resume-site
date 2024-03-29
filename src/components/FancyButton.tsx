import React from 'react';
import styles from '../app/styles/FancyButton.module.css';

type FancyButtonProps = {
    onClick: () => void;
};

const FancyButton: React.FC<FancyButtonProps> = ({ onClick }) => {
    const letters = 'Fancy'.split('');

    return (
        <button className={styles.fancyButton} onClick={onClick}>
            {letters.map((char, index) => (
                <span
                    key={index}
                    className={styles.char}
                >
                    {char}
                </span>
            ))}
        </button>
    );
};

export default FancyButton;
