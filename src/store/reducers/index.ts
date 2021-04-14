import { combineReducers } from 'redux';
import { navigationReducer } from './navigationReducer';

export const rootReducer = combineReducers({
	navigation: navigationReducer,
	navigation2: navigationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
