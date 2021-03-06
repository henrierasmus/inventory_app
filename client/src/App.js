import React from 'react';
import './App.css';
import { Landing } from './components/Landing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catagory from './components/Catagory';
import Brands from './components/Brands';
import Brand from './components/Brand';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Route exact path='/' component={Landing} />
				<Switch>
					<Route exact path='/catagory' component={Landing} />
					<Route exact path='/catagory/:id' component={Catagory} />
					<Route exact path='/brand' component={Brands} />
					<Route exact path='/brand/:id' component={Brand} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
