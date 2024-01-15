import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import './App.css';
import Button from "./components/shared/Button/Button";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isReset, setIsReset] = useState(false);

    return (
        <div className="App">
            <Button
                color="primary"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setIsReset={setIsReset}
            >
                Выполнить действие
            </Button>
            <Modal
                active={isOpen}
                setActive={setIsOpen}
                isReset={isReset}
                setIsReset={setIsReset}
            >

                <h3>Ознакомился с правилами сервиса и принимаю их</h3>
            </Modal>
        </div>
    );
}

export default App;
