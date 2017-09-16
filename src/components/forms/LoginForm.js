import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Containers/components
import InputField from './InputField';

// MaterialUI
import RaisedButton from 'material-ui/RaisedButton';

// Icons/Styling
import googleIcon from '../../images/google.svg';

const styles = {
	form: {
		textAlign: 'center',
		width: '80%',
		margin: 'auto',
		paddingBottom: '1rem'
	},
	google: { height: '60%' },
};

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emailInput: '',
			passwordInput: ''
		};
	}

	handleEmailInput = e => this.setState({ emailInput: e.target.value })
	handlePasswordInput = e => this.setState({ passwordInput: e.target.value })

	handleSignIn = () => {
		let email = this.state.emailInput;
		let pass = this.state.passwordInput;

		this.props.loginUser(email, pass);
	}

	// Keyboard Enter can be used to submit form
	handleKeyPress = (e) => {
		if(e.key === "Enter") {
			this.handleSignIn();
		}
	}

	render() {
		return (
			<div className="login-form" style={styles.form}>
				<InputField
					hintText="Email address"
					floatingLabelText="Email address"
					value={this.state.emailInput}
					onChange={this.handleEmailInput}
				/>
				<InputField
					hintText="Password"
					floatingLabelText="Password"
					type="password"
					value={this.state.passwordInput}
					onChange={this.handlePasswordInput}
					onKeyPress={this.handleKeyPress}
				/>
				<div className="button-container">
					<RaisedButton
						label="Login"
						primary={true}
						fullWidth={true}
						onClick={this.handleSignIn}
					/>
				</div>
				<div className="button-container">
					<RaisedButton
						label="Sign in with Google"
						icon={<img src={googleIcon} style={styles.google} alt=''/>}
						fullWidth={true}
					/>
				</div>
				<Link to='/account-actions'>
					<p>Forgot my password</p>
				</Link>
			</div>
		)
	}
}

export default LoginForm;
