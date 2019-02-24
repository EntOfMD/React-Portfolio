import React, { Component } from 'react';
import '../css/App.css';

import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Header />
					<About />
					<Resume />
					<Portfolio />
					<Contact />
					<Footer />
				</header>
			</div>
		);
	}
}

export default App;
