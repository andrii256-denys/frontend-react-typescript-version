import { combineReducers } from 'redux';
import { goodsReducer } from './goodsReducers';
import { navigationReducer } from './navigationReducer';
import { filtersReducerWrapper } from './filtersReducer';

export const rootReducer = combineReducers({
	navigation: navigationReducer,
	goods: goodsReducer,
	filters: filtersReducerWrapper,
});

export type RootState = ReturnType<typeof rootReducer>;
