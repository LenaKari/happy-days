import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/authActions';

// Components
import SideNav from '../components/dashboard/SideNav';
import Modal from '../components/Modal';

// MaterialUI


// Styling
import '../styles/css/dashboard.css';


class Dashboard extends Component {
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
		const closeError = () => this.props.history.push('/account-actions');

		return (
			<div>
				{this.props.auth.isAuthenticated ? (
					<div className="dashboard-container">
						<SideNav />
						<div className='main-content'>
							{!this.props.auth.user.emailVerified ? (
								<Modal
									title='Unverified email'
									body='Please verify your email address by following the instructions in your registration email.'
									closeError={closeError}
								/>
							) : (
								<p>Verified User</p>
							)}
						</div>
					</div>
					) : (
						<Redirect to='/login' />
					)
				}
			</div>
		)
	}
}


const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(authActions, dispatch) })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
