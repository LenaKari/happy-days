import React, { Component } from 'react';

// Components
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

	handleChange = (value) => {
		this.setState({
			value: value,
		});
	};

	render() {
		return (
			<div className="login-container">
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
				>
					<Tab label="Login" value="a">
						<LoginForm loginUser={this.props.actions.loginUser}/>
					</Tab>
					<Tab label="Sign up" value="b">
						<JoinForm createAccount={this.props.actions.createAccount}/>
					</Tab>
				</Tabs>
			</div>
		)
	}
}


export default Login;