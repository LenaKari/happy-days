import React, { Component } from 'react';

// Containers/components
import NoAccountExists from './NoAccountExists';
import ResetPasswordInput from './ResetPasswordInput';
import ResetPasswordLoader from './ResetPasswordLoader';
import ResetPasswordSent from './ResetPasswordSent';

// Styling
const styles = {
	form: {
		textAlign: 'center',
		width: '80%',
		margin: 'auto',
		paddingBottom: '1rem'
	},
};

class ResetPasswordForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emailInput: '',
			view: 'input'
		};
	}

	handleEmailInput = e => this.setState({ emailInput: e.target.value })

	handleResetPassword = () => {
		this.props.actions.userResetPassword(this.state.emailInput)
		this.setState({ view: 'confirm' });
	}

	// Reset the form back to its initial state
	resetForm = () => { this.setState({ view: 'input' }); }

	render() {
		let content= null;

		if (this.state.view === 'input') {
			// Input for email address to send password reset to
			content = <ResetPasswordInput emailInput={this.state.emailInput} handleEmailInput={this.handleEmailInput} handleResetPassword={this.handleResetPassword} />;
		} else if(this.props.auth.isFetching) {
			// Loader while waiting for response from Firebase
			content = <ResetPasswordLoader />
		} else if (this.props.auth.isResolved) {
			// Email sent
			content = <ResetPasswordSent handleResetPassword={this.handleResetPassword}/>;
		} else {
			// This email address hasn't been registered
			content = <NoAccountExists resetForm={this.resetForm} />;
		}

		return (
			<div className="reset-password-form" style={styles.form}>
				{content}
			</div>
		)
	}
}

export default ResetPasswordForm;
