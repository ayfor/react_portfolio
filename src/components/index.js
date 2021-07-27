import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './header/Header'
import About from './about/About'
import Projects from './projects/Projects';
import ContactForm from './contact/Contact';
import Resume from './resume/Resume';

import './App.css';
import Footer from './footer/Footer';

function App() {
    return (
    <HashRouter>
        <Header /> 
            <div className="custom-container">
            <Switch>
                <Route exact path="/" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/contact" component={ContactForm}/>
                <Route path="/resume" component={Resume}/>
            </Switch>
            </div>  
        <Footer/>
    </HashRouter>
    );
}

export default App;