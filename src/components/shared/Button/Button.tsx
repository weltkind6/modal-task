import React, {useState} from 'react';
import styles from './styles.module.css';

interface IProps {
    isOpen?: boolean;
    children: React.ReactNode;
    marginTop?: number;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    setIsReset?: React.Dispatch<React.SetStateAction<boolean>>;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
}
const Button = (props: IProps) => {
    const {children, setIsOpen, setIsReset, color, isOpen} = props;

    const onClickHandler = () => {
        if (setIsOpen) {
            setIsOpen(true);
        }
        if (setIsReset) {
            setIsReset(true);
        }
    }

    return (
        <button
            className={`${styles.btn} ${styles[`btn--${color}`]}`}
            onClick={onClickHandler}
            disabled={isOpen}
        >
            {children}
        </button>
    );
};

export default Button;
