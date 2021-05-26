import { authConstants } from '../actions/constants';

const intialState = {
	token: null,
	user: {
		firstName: '',
		lastName: '',
		email: '',
		picture: '',
	},
	authenticate: false,
	authenticating: false,
	loading: false,
	error: '',
	message: '',
};

export default (state = intialState, action) => {
	console.log(action);
	switch (action.type) {
		case authConstants.LOGIN_REQUEST:
			state = {
				...state,
				authenticating: true,
			};
			break;
		case authConstants.LOGIN_SUCCESS:
			state = {
				...state,
				authenticate: true,
				authenticating: false,
				user: action.payload.user,
				token: action.payload.token,
			};
			break;
		case authConstants.LOGOUT_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;
		case authConstants.LOGOUT_SUCCESS:
			state = {
				...intialState,
			};
			break;
		case authConstants.LOGOUT_FAILURE: 
			state = {
				...state,
				error: action.payload.error,
				loading: false,
			};
			break;
	}
	return state;
};
