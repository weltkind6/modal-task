import React, {useState} from 'react';
import styles from './styles.module.css';

interface IProps {
    children: React.ReactNode;
    marginTop?: number;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
}
const Button = (props: IProps) => {
    const {children, marginTop, setIsOpen, color} = props;

    return (
        <button
            className={`${styles.btn} ${styles[`btn--${color}`]}`}
            style={{marginTop: marginTop}}
            onClick={() => setIsOpen ? setIsOpen(true) : null}
        >
            {children}
        </button>
    );
};

export default Button;
