import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';

import Home from '../components/Home';
import Login from './Login';
import Dashboard from './Dashboard';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const App = ({auth, actions}) => (
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
			iconElementRight={
				auth.isAuthenticated ? <FlatButton label="Logout" /> : <FlatButton label="Login/sign up" />
			}
		/>

		<Route path='/' exact component={Home} />
		<Route path='/login' render={ () =>
			<Login
				auth={auth}
				actions={actions}
			/>}
		/>
		<Route path='/dashboard' render={ () =>
			<Dashboard
				auth={auth}
				actions={actions}
			/>}
		/>
	</div>
);

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(authActions, dispatch) })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
