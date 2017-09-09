import React from 'react';
import { Link } from 'react-router-dom';

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

const LoginForm = () => (
	<div className="login-form" style={styles.form}>
		<div className="email-field">
			<TextField
				hintText="Email address"
				floatingLabelText="Email address"
				type="text"
				fullWidth={true}
			/>
		</div>
		<div className="password-field">
			<TextField
				hintText="Password"
				floatingLabelText="Password"
				type="password"
				fullWidth={true}
			/>
		</div>
		<div className="button-container">
			<RaisedButton
				label="Login"
				primary={true}
				fullWidth={true}
			/>
		</div>
		<div className="button-container">
			<RaisedButton
				label="Sign in with Google"
				icon={<img src={googleIcon} style={styles.google} alt=''/>}
				fullWidth={true}
			/>
		</div>
		<Link to=''>
			<p>Forgot my password</p>
		</Link>
	</div>
)



export default LoginForm;
