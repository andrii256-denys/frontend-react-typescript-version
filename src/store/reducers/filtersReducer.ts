import { FiltersState, FiltersAction, FiltersActionsTypes } from "../../types/filters";

const initailState: FiltersState = {
	isVisible: false,

}

export const filtersReducer = (state: FiltersState = initailState, action: FiltersAction): FiltersState => {
	switch (action.type) {
		case FiltersActionsTypes.UPDATE_FILTERS_VISIBILITY:
			return {
				...state,
				isVisible: action.payload === 'show' ? true : false
			};

		default:
			return state;
	}
}
