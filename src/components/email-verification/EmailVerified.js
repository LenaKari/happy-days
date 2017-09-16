import React from 'react';
import { Link } from 'react-router-dom';

// MaterialUI
import RaisedButton from 'material-ui/RaisedButton';


const EmailVerified = () => (
	<div>
		<p>Thank you for verifying your account!</p>
		<div className="button-container">
			<Link to='/dashboard'>
				<RaisedButton
					label="Dashboard"
					primary={true}
					fullWidth={true}
				/>
			</Link>
		</div>
	</div>
)

export default EmailVerified;
