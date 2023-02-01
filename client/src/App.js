import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Nav from './components/Nav/Nav';
import UserList from './pages/UserList/UserList';
import Profile from './pages/Profile/Profile';

function App() {
    const [userName, setUserName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    return (
        <div id = "wholePage">
            <Router>
                <Nav id= "navBar"
                    userName={userName}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setSignedIn={setSignedIn}
                    signedIn={signedIn}
                    setUserName={setUserName}
                />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Home 
                                userName={userName}
                                signedIn={signedIn}
                            />
                        }
                    />
                    <Route
                        path='/about'
                        element={
                            <About
                                userName={userName}
                                signedIn={signedIn}
                            />
                        }
                    />
                    <Route
                        path='/users'
                        element={
                            <UserList />
                        }
                    />
                    <Route
                        path='/profile/:username'
                        element={
                            <Profile />
                        }
                    />
                </Routes>
            </Router>
        </ div>
    );
}

export default App;
