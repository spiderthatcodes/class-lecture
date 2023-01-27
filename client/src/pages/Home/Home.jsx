import React from 'react';
import castle from '../../resources/castle.jpg';
import './style.css';


const Home = ({signedIn, userName}) => {
    return (
        <div id = "wholePage">
            <h1 className= "header">Welcome</h1>
            <h2 className='header'>{signedIn ? `Hello, ${userName}` : 'Hello!'}</h2>

            {!signedIn && (
                <img className='header'
                    id='castlePicture'
                    src={castle}
                    alt='castle'
                />
            )}
            {signedIn && (
                <p className='info'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            )}
        </div>
    );
};

export default Home;
