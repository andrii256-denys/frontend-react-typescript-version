import { combineReducers } from 'redux';
import { goodsReducer } from './goodsReducers';
import { navigationReducer } from './navigationReducer';
import { filtersReducerWrapper } from './filtersReducer';
import { statisticsReducer } from './statisticsReducer';

export const rootReducer = combineReducers({
	navigation: navigationReducer,
	goods: goodsReducer,
	filters: filtersReducerWrapper,
	statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
