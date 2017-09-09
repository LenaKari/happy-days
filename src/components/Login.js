import React, { Component } from 'react';

// Components
import JoinForm from './forms/JoinForm';
import LoginForm from './forms/LoginForm';

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
						<LoginForm />
					</Tab>
					<Tab label="Sign up" value="b">
						<JoinForm />
					</Tab>
				</Tabs>
			</div>
		)
	}
}


export default Login;
