import React, { Component } from 'react';
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
	google: {
		height: '60%'
	},
};

class JoinForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInput: '',
			emailInput: '',
			passwordInput: '',
			passwordConfirmInput: '',
		};
	}

	handleNameInput = e => this.setState({ nameInput: e.target.value })
	handleEmailInput = e => this.setState({ emailInput: e.target.value })
	handlePasswordInput = e => this.setState({ passwordInput: e.target.value })
	handlePasswordConfirmInput = e => this.setState({ passwordConfirmInput: e.target.value })

	handleRegisterAccount = () => {
		if (this.formIsValid()) {
			let name = this.state.nameInput;
			let email = this.state.emailInput;
			let pass = this.state.passwordInput;

			this.props.createAccount(name, email, pass);
		} else {
			console.log("Passwords don't match");
		}
	}

	// Keyboard Enter can be used to submit form
	handleKeyPress = (e) => {
		if(e.key === "Enter") {
			this.handleRegisterAccount();
		}
	}

	// TODO: Set up validation
	formIsValid = () => {
		return true;
	}

	render () {
		return (
			<div className="join-form" style={styles.form}>

				<InputField
					hintText="What should we call you?"
					floatingLabelText="Name"
					value={this.state.nameInput}
					onChange={this.handleNameInput}
				/>


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
				/>

				<InputField
					hintText="Re-enter password"
					floatingLabelText="Re-enter password"
					type="password"
					value={this.state.passwordConfirmInput}
					onChange={this.handlePasswordConfirmInput}
					onKeyPress={this.handleKeyPress}
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
