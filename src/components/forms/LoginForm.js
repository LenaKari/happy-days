import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Containers/components
import InputField from './InputField';
import Modal from '../Modal';

// MaterialUI
import FlatButton from 'material-ui/FlatButton';
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
			passwordInput: '',
			passwordInputHidden: true
		};
	}

	handleEmailInput = e => this.setState({ emailInput: e.target.value })
	handlePasswordInput = e => this.setState({ passwordInput: e.target.value })

	togglePasswordInput = () => {
		this.setState({ passwordInputHidden: !this.state.passwordInputHidden });
	}

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
					type={this.state.passwordInputHidden ? 'password' : 'text'}
					value={this.state.passwordInput}
					onChange={this.handlePasswordInput}
					onKeyPress={this.handleKeyPress}
				/>
				<FlatButton
					label={this.state.passwordInputHidden ? 'Show password' : 'Hide password'}
					secondary={true}
					onClick={this.togglePasswordInput}
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
						onClick={this.props.actions.signInWithProvider}
					/>
				</div>
				<Link to='/account-actions'>
					<p>Forgot my password</p>
				</Link>
				{this.props.error && this.props.error.length > 0 ? (
						<Modal
							title='Oops!'
							body={this.props.error}
							closeError={this.props.closeError}
						/>
				) : null }
			</div>
		)
	}
}

export default LoginForm;
