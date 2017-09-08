import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppBar
					title="Happy Days"
					className="navbar"
					iconElementLeft={
						<IconButton>
							<Link to='/'>
								<ActionHome style={{color:'#fff'}} />
							</Link>
						</IconButton>
					}
				/>

				<Route path='/' exact component={Home} />
				<Route path='/login' component={Login} />
			</div>
		);
	}
}

export default App;
