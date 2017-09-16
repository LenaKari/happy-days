import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/authActions';

// Containers/components
import AccountActions from './AccountActions';
import Dashboard from './Dashboard';
import Header from '../components/Header';
import Home from '../components/Home';
import Login from './Login';


const App = ({ auth, actions, history }) => {

	return (
		<div className="App">
			<Header
				auth={auth}
				actions={actions}
				history={history}
			/>
			<Route path='/' exact component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/account-actions' component={AccountActions} />
		</div>
	);
}
const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(authActions, dispatch) })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
