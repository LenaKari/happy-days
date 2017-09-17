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
		this.props.closeError();
		this.setState({open: false});
	};

	render() {
		const actions = [
			<RaisedButton
				label="Close"
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
