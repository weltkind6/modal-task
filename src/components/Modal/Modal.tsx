import React from "react";
import styles from './styles.module.css';
import Button from "../shared/Button/Button";

interface Props {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
}

const Modal = ({active, setActive, children}: Props) => {
    return (
        <div
            className={`${styles.modal} ${active ? styles.active : ''}`}
            onClick={() => setActive(false)}
        >
            <div
                className={styles.content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}

                <div className={styles.btnBlock}>
                    <Button>
                        Accept
                    </Button>
                    <Button>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
