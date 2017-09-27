import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/authActions';

// Components
import Entries from '../components/dashboard/entries/Entries'
import Modal from '../components/Modal';
import Settings from '../components/dashboard/Settings'
import SideNav from '../components/dashboard/SideNav';
import Tutorial from '../components/dashboard/Tutorial'

// MaterialUI


// Styling
import '../styles/css/dashboard.css';


class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view: 'entries',
		};
	}

	render() {
		const closeError = () => this.props.history.push('/account-actions');

		const changeView = (view) => this.setState({ view: view });

		return (
			<div>
				{this.props.auth.isAuthenticated ? (
					<div className="dashboard-container">
						<SideNav actions={this.props.actions} changeView={changeView} />
						<div className='main-content'>
							{!this.props.auth.user.emailVerified ? (
								<Modal
									title='Unverified email'
									body='Please verify your email address by following the instructions in your registration email.'
									closeError={closeError}
								/>
							) : (
								null
							)}
							{this.state.view === 'entries' ? ( <Entries /> ) : null }
							{this.state.view === 'settings' ? ( <Settings /> ) : null }
							{this.state.view === 'tutorial' ? ( <Tutorial /> ) : null }
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
