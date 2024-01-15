import React, {useState} from 'react';
import Button from "./components/shared/Button/Button";
import Modal from "./components/Modal/Modal";
import './App.css';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [timerReset, setTimerReset] = useState(false);
    const [isReset, setIsReset] = useState(false);

    return (
        <div className="App">
            <button
                onClick={() => {
                    setIsOpen(true);
                    setTimerReset((prev) => !prev);
                    setIsReset(true);
                }}
                className="pureButton"
            >
                Выполнить действие
            </button>
            <Modal
                active={isOpen}
                setActive={setIsOpen}
                timerReset={timerReset}
                isReset={isReset}
                setIsReset={setIsReset}
            >

                <h3>Ознакомился с правилами сервиса и принимаю их</h3>
            </Modal>
        </div>
    );
}

export default App;
