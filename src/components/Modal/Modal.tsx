import React, {useEffect, useState} from "react";
import styles from './styles.module.css';
import Button from "../shared/Button/Button";

interface Props {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
    isReset: boolean;
    setIsReset: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({active, setActive, isReset, setIsReset,  children}: Props) => {
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [timer, setTimer] = useState(5);
    const [isTimerVisible, setIsTimerVisible] = useState(true);

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

    useEffect(() => {
        if (isReset) {
            setTimer(5);
            setIsTimerVisible(true);
            setIsReset(false);
        }
    }, [isReset, setIsReset]);

    const cancelHandler = () => {
        setActive(false);
    }

    const acceptHandler = () => {
        setActive(false);
        setDisabledBtn(true);
        setTimeout(() => {
            alert("Действие выполнено");
        }, 1000);
    };

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
                        onClick={acceptHandler}
                        className={`${styles.button} ${styles.buttonSuccess}`}
                    >
                        <div className={styles.text}>
                            <span>Подтвердить</span>
                            <div>{isTimerVisible && <span>({timer})</span>}</div>
                        </div>
                    </button>
                    <button
                        className={`${styles.button} ${styles.buttonDanger}`}
                        onClick={cancelHandler}
                    >
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
