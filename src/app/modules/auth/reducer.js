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
		default :
			return state;
	}
};

export default auth;
