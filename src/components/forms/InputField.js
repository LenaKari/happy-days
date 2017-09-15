import React from 'react';
import PropTypes from 'prop-types';

// MaterialUI
import TextField from 'material-ui/TextField';


const InputField = ({
		hintText,
		floatingLabelText,
		type,
		fullWidth,
		value,
		onChange,
		onKeyPress
	}) => (
		<div className='form-field'>
			<TextField
				hintText={hintText}
				floatingLabelText={floatingLabelText}
				type={type}
				fullWidth={fullWidth}
				value={value}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
		</div>

)

InputField.propTypes = {
	hintText: PropTypes.string,
	floatingLabelText: PropTypes.string,
	type: PropTypes.string.isRequired,
	fullWidth: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func
};

InputField.defaultProps = {
	type: 'text',
	fullWidth: true
};

export default InputField;
