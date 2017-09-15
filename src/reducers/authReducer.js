const initialState = {
	isFetching: false,
	isAuthenticated: false,
	isResolved: false,
	error: null,
	user: {},
	profile: {}
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_REQUEST' :
			return {
				...state,
				isFetching: true,
				isAuthenticated: false
			}
		case 'LOGIN_SUCCESS' :
			return {
				...state,
				isFetching: false,
				isAuthenticated: true,
				isResolved: true,
				user: action.user
			}
		case 'LOGIN_FAILED' :
			return {
				...state,
				isFetching: false,
				isAuthenticated: false,
				isResolved: false,
				error: action.message
			}
		case 'LOGOUT_SUCCESS' :
			return {
				...initialState,
				isResolved: true
			}
		case 'PASSWORD_RESET_REQUEST' :
			return {
				...initialState,
				isFetching: true
			}
		case 'PASSWORD_RESET_FAILED' :
			return {
				...initialState
			}
		case 'PASSWORD_RESET_SENT' :
			return {
				...initialState,
				isResolved: true
			}
		default :
			return state;
	}
};

export default auth;
