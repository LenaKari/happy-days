import React from 'react';
import { Link } from 'react-router-dom';

// MaterialUI
import RaisedButton from 'material-ui/RaisedButton';


const NotLoggedIn = () => (
	<div>
		<p>Please sign in to request a new verification email.</p>
		<div className="button-container">
			<Link to='/login'>
				<RaisedButton
					label="Login/Register"
					secondary={true}
					fullWidth={true}
				/>
			</Link>
		</div>
	</div>
)

export default NotLoggedIn;
