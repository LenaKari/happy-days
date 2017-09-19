const initialState = {
	pending: false,
	error: null
};

const register = (state = initialState, action) => {
	switch (action.type) {
		case 'REGISTRATION_REQUEST' :
			return {
				...state,
				pending: true
			}
		case 'REGISTRATION_SUCCESS' :
			return {
				...initialState,
			}
		case 'REGISTRATION_FAILED' :
			return {
				...state,
				pending: false,
				error: action.error
			}
		case 'REGISTER_ERROR_ACKNOWLEDGED' :
			return {
				...initialState
			}
		default :
			return state;
	}
};

export default register;
