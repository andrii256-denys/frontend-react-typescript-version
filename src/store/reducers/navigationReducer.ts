import { NavigationState, NavigationAction, NavigationActionsTypes } from '../../types/navigation';

const initialState: NavigationState = {
	currentTab: 'buckwheat',
}

export const navigationReducer = (state: NavigationState = initialState, action: NavigationAction): NavigationState => {
	switch (action.type) {
		case NavigationActionsTypes.UPDATE_CATEGORY:
			return {
				...state,
				currentTab: action.payload
			}
		default:
			return state;
	}
}
