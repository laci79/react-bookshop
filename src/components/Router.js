import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import App from './App';
import Contact from './Contact';


const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
        </Switch>
    </HashRouter>
);

export default Router;