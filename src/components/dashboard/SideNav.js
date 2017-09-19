import React, { Component } from 'react';

// Material UI
import AppBar from 'material-ui/AppBar';
import BurgerMenu from 'material-ui/svg-icons/navigation/menu';
import ArrowRight from 'material-ui/svg-icons/navigation/arrow-forward';
import Calendar from 'material-ui/svg-icons/action/date-range';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Info from 'material-ui/svg-icons/action/info';
import Settings from 'material-ui/svg-icons/action/settings';
import SignOut from 'material-ui/svg-icons/content/reply';

class SideNav extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	handleToggle = () => this.setState({open: !this.state.open});

	render() {
		return (
			<div className="sidenav">
				<div className='sidebar-toggle'>
					<IconButton>
						<BurgerMenu color='#ffffff' onClick={this.handleToggle} />
					</IconButton>
				</div>

				<Drawer width={200} openSecondary={true} open={this.state.open} >
					<AppBar
						iconElementLeft={
							<IconButton>
								<ArrowRight onClick={this.handleToggle} />
							</IconButton>
						}
					/>
					<div className="menu-item" onClick={this.handleToggle}>
						<Calendar />
						<p>Entries</p>
					</div>
					<div className="menu-item" onClick={this.handleToggle}>
						<Settings />
						<p>Settings</p>
					</div>
					<div className="menu-item" onClick={this.handleToggle}>
						<Info />
						<p>Tutorial</p>
					</div>
					<Divider />
					<div className="menu-item" onClick={this.props.actions.logoutUser}>
						<SignOut />
						<p>Sign out</p>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default SideNav;
