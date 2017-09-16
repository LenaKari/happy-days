import React, { Component } from 'react';

// MaterialUI
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
	container: {
		position: 'relative',
	},
	refresh: {
		display: 'inline-block',
		position: 'relative',
	},
};


class ResetPasswordLoader extends Component {
	render() {
		return (
			<div className='loading-container'>
				<RefreshIndicator
					size={50}
					left={0}
					top={50}
					status="loading"
					style={style.refresh}
				/>
			</div>
		)
	}
}

export default ResetPasswordLoader;
