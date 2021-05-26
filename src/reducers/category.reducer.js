import { catagoryConstants } from '../actions/constants';

const initState = {
	categories: [],
	loading: false,
	error: null,
};

export default (state = initState, action) => {
	switch (action.type) {
		case catagoryConstants.GET_ALL_CATEGORY_SUCCESS:
			state = {
				...state,
				categories: action.payload.categories,
			};
			break;
	}
	return state;
};
