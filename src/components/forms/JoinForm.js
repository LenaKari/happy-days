import React, { Component } from 'react';

// Containers/components
import InputField from './InputField';
import * as validate from '../../utils/validation';

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

class JoinForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInput: '',
			emailInput: '',
			passwordInput: '',
			passwordConfirmInput: '',
			nameError: '',
			emailError: '',
			passwordError: '',
			passwordConfirmError: ''
		};
	}

	// While the user is inserting into field, remove errors
	handleNameInput = e => {
		this.handleNameError('');
		this.setState({ nameInput: e.target.value });
	}
	handleEmailInput = e => {
		this.handleEmailError('');
		this.setState({ emailInput: e.target.value });
	}
	handlePasswordInput = e => {
		this.handlePasswordError('');
		this.setState({ passwordInput: e.target.value });
	}
	handlePasswordConfirmInput = e => {
		this.handlePasswordConfirmError('');
		this.setState({ passwordConfirmInput: e.target.value });
	}

	handleNameError = (error) => this.setState({ nameError: error })
	handleEmailError = (error) => this.setState({ emailError: error })
	handlePasswordError = (error) => this.setState({ passwordError: error })
	handlePasswordConfirmError = (error) => this.setState({ passwordConfirmError: error })

	handleRegisterAccount = () => {
		if (this.formIsValid()) {
			let name = this.state.nameInput;
			let email = this.state.emailInput;
			let pass = this.state.passwordInput;

			this.props.createAccount(name, email, pass);
		} else {
			this.displayFormErrors();
		}
	}

	// Keyboard Enter can be used to submit form
	handleKeyPress = (e) => {
		if(e.key === "Enter") {
			this.handleRegisterAccount();
		}
	}

	formIsValid = () => {
		const isValidName = validate.isValidName(this.state.nameInput);
		const isValidEmail = validate.isValidEmail(this.state.emailInput);
		const isValidPassword = validate.isValidPassword(this.state.passwordInput);
		const passwordsMatch = validate.passwordsMatch(this.state.passwordInput, this.state.passwordConfirmInput);

		return isValidName && isValidEmail && isValidPassword && passwordsMatch ? true : false;
	}

	displayFormErrors = () => {
		this.handleNameError(validate.isValidName(this.state.nameInput) ? '' : validate.requiredError());
		this.handleEmailError(validate.isValidEmail(this.state.emailInput) ? '' : validate.emailError());
		this.handlePasswordError(validate.isValidPassword(this.state.passwordInput) ? '' : validate.passwordError());
		this.handlePasswordConfirmError(validate.passwordsMatch(this.state.passwordInput, this.state.passwordConfirmInput) ? '' : validate.passwordConfirmError());
	}


	render () {
		return (
			<div className="join-form" style={styles.form}>

				<InputField
					hintText="What should we call you?"
					floatingLabelText="Name"
					value={this.state.nameInput}
					onChange={this.handleNameInput}
					errorText={this.state.nameError}
				/>

				<InputField
					hintText="Email address"
					floatingLabelText="Email address"
					value={this.state.emailInput}
					onChange={this.handleEmailInput}
					errorText={this.state.emailError}
				/>

				<InputField
					hintText="Password"
					floatingLabelText="Password"
					type="password"
					value={this.state.passwordInput}
					onChange={this.handlePasswordInput}
					errorText={this.state.passwordError}
				/>

				<InputField
					hintText="Re-enter password"
					floatingLabelText="Re-enter password"
					type="password"
					value={this.state.passwordConfirmInput}
					onChange={this.handlePasswordConfirmInput}
					onKeyPress={this.handleKeyPress}
					errorText={this.state.passwordConfirmError}
				/>

				<div className="button-container">
					<RaisedButton
						label="Join"
						primary={true}
						fullWidth={true}
						onClick={this.handleRegisterAccount}
					/>
				</div>
				<div className="button-container">
					<RaisedButton
						label="Sign up with Google"
						icon={<img src={googleIcon} style={styles.google} alt=''/>}
						fullWidth={true}
					/>
				</div>
			</div>
		)
	}
}


export default JoinForm;
