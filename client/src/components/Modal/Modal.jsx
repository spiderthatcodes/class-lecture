import Button from '../Button/Button';
import './card.css';

const Modal = ({ userName, setUserName, setShowModal }) => {
    return (
        <div>
            <p
                id='exit'
                onClick={() => setShowModal(false)}
            >
                X
            </p>
            <input
                type='text'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <Button
                text='Sign In'
                onClick={setShowModal}
                changeValue={false}
            />
        </div>
    );
};

export default Modal;
