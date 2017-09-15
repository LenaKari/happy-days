import React, { Component } from 'react';

// Components
import ResetPasswordForm from './forms/ResetPasswordForm';

// MaterialUI
import {Tabs, Tab} from 'material-ui/Tabs';

// Styling
import '../styles/css/account_actions.css';


class AccountActions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'a',
		};
	}

	handleChange = (value) => {
		this.setState({
			value: value,
		});
	};

	render() {
		return (
			<div className="account-actions-container">
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
				>
					<Tab label="Reset Password" value="a">
						<ResetPasswordForm actions={this.props.actions} auth={this.props.auth}/>
					</Tab>
					<Tab label="Resend verification email" value="b">
						<p>Resend verification email</p>
					</Tab>
				</Tabs>
			</div>
		)
	}
}


export default AccountActions;
