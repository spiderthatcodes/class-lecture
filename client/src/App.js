import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Nav from './components/Nav/Nav';

function App() {
    const [userName, setUserName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    return (
        <>
            <Router>
                <Nav
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
                </Routes>
            </Router>
        </>
    );
}

export default App;
