import React, { Component } from 'react';

// MaterialUI
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Styling
import '../styles/css/login.css';

const styles = {
	form: {
		textAlign: 'center',
		width: '80%',
		margin: 'auto',
		paddingBottom: '1rem'
	},
};

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
						<div className="login-form" style={styles.form}>
							<div className="email-field">
								<TextField
									hintText="Email address"
									floatingLabelText="Email address"
									type="text"
									fullWidth={true}
								/>
							</div>
							<div className="password-field">
								<TextField
									hintText="Password"
									floatingLabelText="Password"
									type="password"
									fullWidth={true}
								/>
							</div>
							<div className="button-container">
								<RaisedButton label="Login" primary={true} />
							</div>
						</div>
					</Tab>
					<Tab label="Sign up" value="b">
						<div className="join-form" style={styles.form}>
							<div className="name-field">
								<TextField
									hintText="Name"
									floatingLabelText="What should we call you?"
									type="text"
									fullWidth={true}
								/>
							</div>
							<div className="email-field">
								<TextField
									hintText="Email address"
									floatingLabelText="Email address"
									type="text"
									fullWidth={true}
								/>
							</div>
							<div className="password-field">
								<TextField
									hintText="Password"
									floatingLabelText="Password"
									type="password"
									fullWidth={true}
								/>
							</div>
							<div className="password-match-field">
								<TextField
									hintText="Re-enter password"
									floatingLabelText="Re-enter password"
									type="password"
									fullWidth={true}
								/>
							</div>
							<div className="button-container">
								<RaisedButton label="Join" primary={true} />
							</div>
						</div>
					</Tab>
				</Tabs>
			</div>
		)
	}
}


export default Login;
