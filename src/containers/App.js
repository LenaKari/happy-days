import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/authActions';

// Containers/components
import AccountActions from './AccountActions';
import Dashboard from './Dashboard';
import Home from '../components/Home';
import Login from './Login';

// MaterialUI
import ActionHome from 'material-ui/svg-icons/action/home';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

const App = (props) => (
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
				props.auth.isAuthenticated ? <FlatButton label="Logout" onClick={props.actions.logoutUser} /> : <FlatButton label="Login/sign up" />
			}
		/>

		<Route path='/' exact component={Home} />
		<Route path='/login' component={Login} />
		<Route path='/dashboard' component={Dashboard} />
		<Route path='/account-actions' component={AccountActions} />
	</div>
);

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(authActions, dispatch) })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
