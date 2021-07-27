import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header/Header'
import About from './about/About'
import Projects from './projects/Projects';
import ContactForm from './contact/Contact';
import Resume from './resume/Resume';

import './App.css';

function App() {
    return (
    <Router>
        <Header /> 
        <Switch>
            <Route exact path="/">
                <About/>
            </Route>
            <Route path="/projects">
                <Projects/>
            </Route>
            <Route path="/contact">
                <ContactForm/>
            </Route>
            <Route path="/resume">
                <Resume/>
            </Route>
        </Switch>
    </Router>
    );
}

export default App;