import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Button from '../Button/Button';

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
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>

            {showModal && (
                <Card
                    userName={userName}
                    setUserName={setUserName}
                    setShowModal={setShowModal}
                />
            )}
            <Button
                text='Sign In'
                onClick={setShowModal}
                changeValue={true}
            />
            <Button
                text='Sign Out'
                onClick={signOut}
            />
        </div>
    );
};

export default Nav;
