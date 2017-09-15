import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputField from './InputField';

// MaterialUI
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';

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

	// Keyboard Enter can be used to submit form
	handleKeyPress = (e) => {
		if(e.key === "Enter") {
			this.handleResetPassword();
		}
	}

	resetForm = () => {
		this.setState({ view: 'input' });
	}

	Content = (view) => {
		if (view === 'input') {
			return <div>
				<p>To receive a link to reset your password, please provide the email address you registered with.</p>
				<InputField
					hintText="Email address"
					floatingLabelText="Email address"
					value={this.state.emailInput}
					onChange={this.handleEmailInput}
				/>
				<div className="button-container">
					<RaisedButton
						label="Reset password"
						primary={true}
						fullWidth={true}
						onClick={this.handleResetPassword}
					/>
				</div>
			</div>;
		} else if(this.props.auth.isFetching) {
			const style = {
				container: {
					position: 'relative',
				},
				refresh: {
					display: 'inline-block',
					position: 'relative',
				},
			};
			return <div className='loading-container'>
				<RefreshIndicator
					size={50}
					left={0}
					top={50}
					status="loading"
					style={style.refresh}
				/>
			</div>
		} else if (this.props.auth.isResolved) {
			return <div>
				<p>An email has been sent to the address provided with instructions on how to reset your password.</p>
				<div className="button-container">
					<Link to='/login'>
						<RaisedButton
							label="Sign in"
							primary={true}
							fullWidth={true}
						/>
					</Link>
				</div>
				<div className="button-container">
					<RaisedButton
						label="Resend email"
						secondary={true}
						fullWidth={true}
						onClick={this.handleResetPassword}
					/>
				</div>
			</div>;
		}
		return <div>
			<p>No account has been registered with the email address you provided.</p>
			<div className="button-container">
				<Link to='/login'>
					<RaisedButton
						label="Register"
						primary={true}
						fullWidth={true}
					/>
				</Link>
			</div>
			<div className="button-container">
				<RaisedButton
					label="Try again"
					secondary={true}
					fullWidth={true}
					onClick={this.resetForm}
				/>
			</div>
		</div>;
	}

	render() {
		return (
			<div className="reset-password-form" style={styles.form}>
				{this.Content(this.state.view)}
			</div>
		)
	}
}

export default ResetPasswordForm;
