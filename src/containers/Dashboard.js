import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

// Components


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
			<div className="dashboard-container">
				{this.props.auth.isAuthenticated ? (
					<p>Dashboard</p>
				) : (
					<Redirect to='/login' />
				)}
			</div>
		)
	}
}


export default Dashboard;
