import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Index from './pages/index';
import Contact from './pages/contact';
import Menu from './components/menu';
import SiteInfo from './components/siteInfo';

function App() {
	return (
		<Router>
			<div className='App'>
				<Menu />
				<SiteInfo />

				<Route exact path='/' component={Index} />
				<Route exact path='/contact' component={Contact} />
			</div>
		</Router>
	);
}

export default App;
