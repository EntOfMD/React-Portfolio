import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// **Make sure to edit this file with YOUR information!**
import data from './CONFIG';

//components
import Navbar from './Navbar';
import Footer from './Footer';

//pages
import error404 from '../pages/404';
import Home from '../pages/Home';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Navbar title={data.title} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={error404} />
                </Switch>
                <Footer year={data.currentYear} name={data.name} />
            </Router>
        );
    }
}
