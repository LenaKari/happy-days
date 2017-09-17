import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/authActions';

// Containers/components
import JoinForm from '../components/forms/JoinForm';
import LoginForm from '../components/forms/LoginForm';

// MaterialUI
import {Tabs, Tab} from 'material-ui/Tabs';

// Styling
import '../styles/css/login.css';


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'a',
		};
	}

	handleChange = (value) => { this.setState({ value: value }); };

	render() {
		return (
			<div className="login-container">
				{this.props.auth.isAuthenticated ? (
					<Redirect to='/dashboard' />
				) : (
					<Tabs value={this.state.value} onChange={this.handleChange}>
						<Tab label="Login" value="a">
							<LoginForm loginUser={this.props.actions.loginUser}/>
						</Tab>
						<Tab label="Sign up" value="b">
							<JoinForm
								createAccount={this.props.actions.createAccount}
								error={this.props.register.error}
								closeRegistrationError={this.props.actions.closeRegistrationError}
							/>
						</Tab>
					</Tabs>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	register: state.register
})

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(authActions, dispatch) })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
