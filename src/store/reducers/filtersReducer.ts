import { FILTERS } from "../../constants/localStorage";
import { FiltersState, FiltersAction, FiltersActionsTypes } from "../../types/filters";
import { getFiltersState, saveState } from '../API/localStorage';
import { POSSIBLE_SHOPS } from '../../constants/POSSIBLE_SHOPS';
import { ShopExtended } from "../../types/ShopType";

const savedState = getFiltersState();

const shops: ShopExtended[] = POSSIBLE_SHOPS.map(shop => ({
	...shop,
	allowed: true,
}))

const defaultState: FiltersState = {
	isVisible: true,
	price: {
		min: 0,
		max: 1000,
	},
	sortDirection: 'down',
	shops: shops,
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

		case FiltersActionsTypes.INVERT_SORT_DIRECTION:
			return {
				...state,
				sortDirection: state.sortDirection === 'up' ? 'down' : 'up'
			}

		case FiltersActionsTypes.UPDATE_LIST_OF_SHOPS:
			const newShops: ShopExtended[] = state.shops.map(shop => ({
				...shop,
				allowed: shop.id === action.payload.id ? !shop.allowed : shop.allowed,
			}))
			return {
				...state,
				shops: newShops,
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