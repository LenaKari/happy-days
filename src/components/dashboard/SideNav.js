import React, { Component } from 'react';

// Material UI
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Calendar from 'material-ui/svg-icons/action/date-range';
import Info from 'material-ui/svg-icons/action/info';
import Settings from 'material-ui/svg-icons/action/settings';
import SignOut from 'material-ui/svg-icons/content/reply';
import ArrowRight from 'material-ui/svg-icons/navigation/arrow-forward';
import IconButton from 'material-ui/IconButton';

class SideNav extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	handleToggle = () => this.setState({open: !this.state.open});

	render() {
		return (
			<div className="sidenav">
				<RaisedButton
					label="Toggle Drawer"
					onClick={this.handleToggle}
				/>
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
					<div className="menu-item" onClick={this.handleToggle}>
						<SignOut />
						<p>Sign out</p>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default SideNav;
