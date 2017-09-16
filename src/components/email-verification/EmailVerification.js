import React, { Component } from 'react';

// Containers/components
import EmailVerified from './EmailVerified';
import EmailUnverified from './EmailUnverified';
import NotLoggedIn from './NotLoggedIn';

// Styling
const styles = {
	form: {
		textAlign: 'center',
		width: '80%',
		margin: 'auto',
		paddingBottom: '1rem'
	},
};

class EmailVerification extends Component {
	render() {
		let content = null;

		if (this.props.auth.user.emailVerified) {
			// If the user has verified their email address
			content = <EmailVerified />;
		} else if (this.props.auth.user.emailVerified === false) {
			// If there is a user, and they haven't verified their email address
			content = <EmailUnverified />;
		} else {
			// If there is not a logged in user
			content = <NotLoggedIn />
		}

		return (
			<div className="email-verification-form" style={styles.form}>
				{content}
			</div>
		)
	}
}

export default EmailVerification;
