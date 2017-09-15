import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

// Components
import SideNav from '../components/dashboard/SideNav';

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
		return (
			<div>
				{this.props.auth.isAuthenticated ? (
					<div className="dashboard-container">
						<SideNav />
					</div>
					) : (
						<Redirect to='/login' />
					)
				}
			</div>
		)
	}
}


export default Dashboard;
