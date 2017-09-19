import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// MaterialUI
import ActionHome from 'material-ui/svg-icons/action/home';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

class Header extends Component {
	navigateToLogin = () => this.props.history.push('/login');

	navRightContent = () => {
		if (this.props.history.location.pathname === '/dashboard') {
			return null;
		} else if (this.props.auth.isAuthenticated) {
			return <FlatButton label="Logout" onClick={this.props.actions.logoutUser} />;
		} else {
			return <FlatButton label="Login/sign up" onClick={this.navigateToLogin} />;
		}
	}

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
				iconElementRight={ this.navRightContent() }
			/>

		)
	}
}

export default Header;
