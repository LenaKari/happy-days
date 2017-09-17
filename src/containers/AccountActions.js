import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/authActions';

// Containers/components
import EmailVerification from '../components/email-verification/EmailVerification';
import ResetPasswordForm from '../components/forms/reset-password/ResetPasswordForm';

// MaterialUI
import {Tabs, Tab} from 'material-ui/Tabs';

// Styling
import '../styles/css/account_actions.css';


class AccountActions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'password',
		};
	}

	handleChange = (value) => { this.setState({ value: value }); };

	render() {
		return (
			<div className="account-actions-container">
				<Tabs value={this.state.value} onChange={this.handleChange}>
					<Tab label="Reset Password" value="password">
						<ResetPasswordForm actions={this.props.actions} auth={this.props.auth}/>
					</Tab>
					<Tab label="Resend verification email" value="verify">
						<EmailVerification actions={this.props.actions} auth={this.props.auth} />
					</Tab>
				</Tabs>
			</div>
		)
	}
}


const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(authActions, dispatch) })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountActions));
