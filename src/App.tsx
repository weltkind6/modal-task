import React, {useState} from 'react';
import Button from "./components/shared/Button/Button";
import Modal from "./components/Modal/Modal";
import './App.css';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="App">
            <Button
                setIsOpen={setIsOpen}
                marginTop={20}
            >Выполнить действие
            </Button>
            <Modal
                active={isOpen}
                setActive={setIsOpen}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ex expedita magni nulla quas! Culpa
                cum exercitationem iusto nam odio tempora, temporibus? Accusamus, aut dignissimos eveniet possimus rerum
                velit voluptatem!
            </Modal>
        </div>
    );
}

export default App;
