import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// **Make sure to edit this file with YOUR information!**
import data from './CONFIG.json';

//components
import Navbar from './Navbar';
import Footer from './Footer';

//pages
import error404 from '../pages/404';
import Home from '../pages/Home';

export default class App extends Component {
  //This will set the title once the app is up and running
  componentDidMount() {
    document.title = data.siteTitle;
  }

  render() {
    return (
      <Router>
        {/* Navbar should display even if the user goes to an invalid URL, so it's outside of Switch */}
        <Navbar navbarTitle={data.navbarTitle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={error404} />
        </Switch>
        {/* So should the footer */}
        <Footer
          year={data.currentYear}
          name={data.name}
          githubRepo={data.githubRepo}
        />
      </Router>
    );
  }
}
