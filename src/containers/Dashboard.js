import React, { Component } from 'react';

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
				<p>Dashboard</p>
			</div>
		)
	}
}


export default Dashboard;
