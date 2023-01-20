import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import castle from '../../resources/castle.jpg';
import './style.css';
import Card from '../../components/Card/Card';

const Home = () => {
    const [userName, setUserName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [signedIn, setSignedIn] = useState(false);

    

    return (
        <div>
            <h1>Home</h1>
            <h2>Hello!</h2>
            {showModal && (
                <Card
                    userName={userName}
                    setUserName={setUserName}
                    setShowModal={setShowModal}
                    setSignedIn={setSignedIn}
                />
            )}
            <Button
                text='Sign In'
                onClick={setShowModal}
                changeValue={true}
            />
            <Button text='Sign Out' />
            <img
                id='castlePicture'
                src={castle}
                alt='castle'
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

export default Home;
