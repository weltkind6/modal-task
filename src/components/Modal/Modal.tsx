import React, {useEffect, useState} from "react";
import styles from './styles.module.css';
import Button from "../shared/Button/Button";

interface Props {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
}

const Modal = ({active, setActive, children}: Props) => {
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [timer, setTimer] = useState(5);
    const [isTimerVisible, setIsTimerVisible] = useState(true);

    // Timer
    useEffect(() => {
       const intervalId = setInterval(() => {
          if (timer > 0) {
              setTimer(timer - 1);
          }
          else {
              clearInterval(intervalId);
              setIsTimerVisible(false);
              setDisabledBtn(false);
          }
       }, 1000)
        return () => clearInterval(intervalId);
    }, [timer])

    const cancelHandler = () => {
        setActive(false);
    }

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
                    <button
                        color="success"
                        disabled={disabledBtn}
                    >
                        Accept
                        <div>{isTimerVisible && <span>({timer})</span>}</div>
                    </button>
                    <button
                        color="danger"
                        onClick={cancelHandler}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
