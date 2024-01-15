import React, {useEffect, useState} from "react";
import styles from './styles.module.css';

interface Props {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
    timerReset: boolean;
    isReset: boolean;
    setIsReset: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({active, setActive, timerReset, isReset, setIsReset,  children}: Props) => {
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
                    >
                        Принять
                        <div>{isTimerVisible && <span>({timer})</span>}</div>
                    </button>
                    <button
                        color="danger"
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
