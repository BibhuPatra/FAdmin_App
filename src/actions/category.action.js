import axios from '../helpers/axios';
import { catagoryConstants } from './constants';

export const getAllCategory = () => {
	return async (dispatch) => {
		dispatch({ type: catagoryConstants.GET_ALL_CATEGORY_REQUEST });
		const res = await axios.get(`category/getcategory`);
		console.log(res);
		if (res.status === 200) {
			const { categoryList } = res.data;

			dispatch({
				type: catagoryConstants.GET_ALL_CATEGORY_SUCCESS,
				payload: { categories: categoryList },
			});
		} else {
			dispatch({
				type: catagoryConstants.GET_ALL_CATEGORY_FAILUER,
				payload: { error: res.data.error },
			});
		}
	};
};
