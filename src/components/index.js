import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar'
import About from './about/About'
import Projects from './projects/Projects';

import './App.css';

function App() {
    return (
    <Router>
        <Navbar /> 
        <Switch>
            <Route exact path="/">
                <About/>
            </Route>
            <Route path="/projects">
                <Projects/>
            </Route>
        </Switch>
    </Router>
    );
}

export default App;