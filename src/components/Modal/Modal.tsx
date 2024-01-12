import React from "react";
import styles from './styles.module.css';

interface Props {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
}
const Modal = ({active, setActive, children}: Props) => {
    return (
        <div
            className={`${styles.modal} ${active? styles.active : ''}`}
            onClick={() => setActive(false)}
        >
            <div
                className={styles.content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
