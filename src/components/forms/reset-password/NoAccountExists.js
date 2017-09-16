import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// MaterialUI
import RaisedButton from 'material-ui/RaisedButton';


class NoAccountExists extends Component {
	render() {
		return (
			<div>
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
						onClick={this.props.resetForm}
					/>
				</div>
			</div>
		)
	}
}

export default NoAccountExists;
