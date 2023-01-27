import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import './style.css'

const Nav = ({
    userName,
    showModal,
    setShowModal,
    setSignedIn,
    signedIn,
    setUserName,
}) => {
    useEffect(() => {
        if (userName && !showModal) {
            setSignedIn(true);
        }
    }, [setSignedIn, showModal, signedIn, userName]);

    const signOut = () => {
        setSignedIn(false);
        setUserName('');
        console.log(userName);
    };

    return (
        <div id = "navBar">
            <Link className = "navLink" to='/'>Home</Link>
            <Link className = "navLink"to='/about'>About</Link>

            {showModal && (
                <Modal
                    userName={userName}
                    setUserName={setUserName}
                    setShowModal={setShowModal}
                />
            )}
            <Button className = "navLink"
                text='Sign In'
                onClick={setShowModal}
                changeValue={true}
            />
            <Button className = "navLink"
                text='Sign Out'
                onClick={signOut}
            />
        </div>
    );
};

export default Nav;
