import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<NavBar />
					<div id='page-body'>
						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route path='/about' component={AboutPage} />
							<Route path='/articles-list' component={ArticlesListPage} />
							<Route path='/article/:name' component={ArticlePage} />
							<Route component={NotFoundPage} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
