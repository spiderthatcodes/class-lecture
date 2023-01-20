import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Nav from './components/Nav/Nav';

function App() {
    return (
        <>
            <Router>
              <Nav />
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/about'
                        element={<About />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
