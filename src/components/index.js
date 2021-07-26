import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './navbar/Navbar'

import './App.css';

function App() {
    return (
    <Router>
        <Navbar /> 
        <Route path="/">
            {/* About */}
        </Route>
        <Route path="/portfolio">
            {/* Projects*/}
        </Route>
        <Route path="/">
            {/* Contact */}
        </Route>
        <Route path="/">
            {/* Resume */}
        </Route>


    </Router>
    );
}

export default App;