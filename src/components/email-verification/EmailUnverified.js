import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// MaterialUI
import RaisedButton from 'material-ui/RaisedButton';


class EmailUnverified extends Component {
	handleSendVerificationEmail = () => {
		this.props.actions.sendVerificationEmail();
		this.setState({ view: 'confirm' });
	}

	render() {
		return (
			<div>
				<p>You will need to verify the email address you registered with before you can access your dashboard.</p>
				<div className="button-container">
					<Link to='/dashboard'>
						<RaisedButton
							label="Resend verification email"
							secondary={true}
							fullWidth={true}
							onClick={this.handleSendVerificationEmail}
						/>
					</Link>
				</div>
			</div>
		)
	}
}

export default EmailUnverified;
