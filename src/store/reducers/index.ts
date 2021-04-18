import { combineReducers } from 'redux';
import { goodsReducer } from './goodsReducers';
import { navigationReducer } from './navigationReducer';
import { filtersReducer } from './filtersReducer';

export const rootReducer = combineReducers({
	navigation: navigationReducer,
	goods: goodsReducer,
	filters: filtersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
