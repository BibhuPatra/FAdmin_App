import authReducer from './auth.reducers';
import userReducer from './user.reducers';
import { combineReducers } from 'redux';
import orderReducer from './order.reducer';
import productReducer from './product.reducer';
import categoryReducer from './category.reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	product: productReducer,
	category: categoryReducer,
	order: orderReducer,
});

export default rootReducer;
