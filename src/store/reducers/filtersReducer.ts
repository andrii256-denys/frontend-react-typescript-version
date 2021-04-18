import { FILTERS } from "../../constants/localStorage";
import { FiltersState, FiltersAction, FiltersActionsTypes } from "../../types/filters";
import { getFiltersState, saveState } from '../API/localStorage';

const savedState = getFiltersState();

const defaultState: FiltersState = {
	isVisible: true,
	price: {
		min: 0,
		max: 1000,
	}
}

const initailState: FiltersState = savedState || defaultState;

export const filtersReducer = (state: FiltersState = initailState, action: FiltersAction): FiltersState => {
	switch (action.type) {
		case FiltersActionsTypes.UPDATE_FILTERS_VISIBILITY:
			return {
				...state,
				isVisible: action.payload === 'show' ? true : false
			};

		case FiltersActionsTypes.UPDATE_MAX_PRICE:
			return {
				...state,
				price: {
					...state.price,
					max: action.payload,
				}
			}
		case FiltersActionsTypes.UPDATE_MIN_PRICE:
			return {
				...state,
				price: {
					...state.price,
					min: action.payload,
				}
			}

		default:
			return state;
	}
}

export const filtersReducerWrapper = (state: FiltersState = initailState, action: FiltersAction): FiltersState => {
	const newState = filtersReducer(state, action);

	saveState(newState, FILTERS);

	return newState;
}