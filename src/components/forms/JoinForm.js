import React from 'react';

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

const JoinForm = () => (
	<div className="join-form" style={styles.form}>
		<div className="name-field">
			<TextField
				hintText="Name"
				floatingLabelText="What should we call you?"
				type="text"
				fullWidth={true}
			/>
		</div>
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
		<div className="password-match-field">
			<TextField
				hintText="Re-enter password"
				floatingLabelText="Re-enter password"
				type="password"
				fullWidth={true}
			/>
		</div>
		<div className="button-container">
			<RaisedButton
				label="Join"
				primary={true}
				fullWidth={true}
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



export default JoinForm;
