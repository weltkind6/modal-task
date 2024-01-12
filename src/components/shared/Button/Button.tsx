import React, {useState} from 'react';
import styles from './styles.module.css';

interface IProps {
    children: React.ReactNode;
    marginTop?: number;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
const Button = ({children, marginTop, setIsOpen}: IProps) => {

    return (
        <button
            className={styles.btn}
            style={{marginTop: marginTop}}
            onClick={() => setIsOpen ? setIsOpen(true) : null}
        >
            {children}
        </button>
    );
};

export default Button;
