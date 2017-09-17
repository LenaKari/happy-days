import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
	}

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
		this.props.closeRegistrationError();
	};

	render() {
		const actions = [
			<RaisedButton
				label="Got it"
				primary={true}
				onClick={this.handleClose}
			/>,
		];

		return (
			<div>
				<Dialog
					title={this.props.title}
					actions={actions}
					modal={true}
					open={this.state.open}
				>
					{this.props.body}
				</Dialog>
			</div>
		);
	}
}

export default Modal;