import React, { Component } from 'react';

// MaterialUI
import InputField from '../InputField';
import RaisedButton from 'material-ui/RaisedButton';


class ResetPasswordInput extends Component {
	// Keyboard Enter can be used to submit form
	handleKeyPress = (e) => {
		if(e.key === "Enter") {
			this.props.handleResetPassword();
		}
	}

	render() {
		return (
			<div>
				<p>To receive a link to reset your password, please provide the email address you registered with.</p>
				<InputField
					hintText="Email address"
					floatingLabelText="Email address"
					value={this.props.emailInput}
					onChange={this.props.handleEmailInput}
					onKeyPress={this.handleKeyPress}
				/>
				<div className="button-container">
					<RaisedButton
						label="Reset password"
						primary={true}
						fullWidth={true}
						onClick={this.props.handleResetPassword}
					/>
				</div>
			</div>
		)
	}
}

export default ResetPasswordInput;
