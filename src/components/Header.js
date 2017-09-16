import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// MaterialUI
import ActionHome from 'material-ui/svg-icons/action/home';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

class Header extends Component {
	navigateToLogin = () => this.props.history.push('/login');

	render () {
		return (
			<AppBar
				title="Happy Days"
				className="navbar"
				iconElementLeft={
					<IconButton>
						<Link to='/'>
							<ActionHome style={{color:'#fff'}} />
						</Link>
					</IconButton>
				}
				iconElementRight={
					this.props.auth.isAuthenticated ? (
						<FlatButton label="Logout" onClick={this.props.actions.logoutUser} />
					) : (
						<FlatButton label="Login/sign up" onClick={this.navigateToLogin} />
					)
				}
			/>

		)
	}
}

export default Header;
