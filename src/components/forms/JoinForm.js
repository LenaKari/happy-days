import React, { Component } from 'react';

// MaterialUI
import TextField from 'material-ui/TextField';
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

	// TODO: Set up validation
	formIsValid = () => {
		return true;
	}

	render () {
		return (
			<div className="join-form" style={styles.form}>
				<div className="name-field">
					<TextField
						hintText="What should we call you?"
						floatingLabelText="Name"
						type="text"
						fullWidth={true}
						value={this.state.nameInput}
						onChange={this.handleNameInput}
					/>
				</div>
				<div className="email-field">
					<TextField
						hintText="Email address"
						floatingLabelText="Email address"
						type="text"
						fullWidth={true}
						value={this.state.emailInput}
						onChange={this.handleEmailInput}
					/>
				</div>
				<div className="password-field">
					<TextField
						hintText="Password"
						floatingLabelText="Password"
						type="password"
						fullWidth={true}
						value={this.state.passwordInput}
						onChange={this.handlePasswordInput}
					/>
				</div>
				<div className="password-match-field">
					<TextField
						hintText="Re-enter password"
						floatingLabelText="Re-enter password"
						type="password"
						fullWidth={true}
						value={this.state.passwordConfirmInput}
						onChange={this.handlePasswordConfirmInput}
					/>
				</div>
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
