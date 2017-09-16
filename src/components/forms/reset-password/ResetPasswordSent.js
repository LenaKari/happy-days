import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// MaterialUI
import RaisedButton from 'material-ui/RaisedButton';


class ResetPasswordSent extends Component {
	render() {
		return (
			<div>
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
						onClick={this.props.handleResetPassword}
					/>
				</div>
			</div>
		)
	}
}

export default ResetPasswordSent;
