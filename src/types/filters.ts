import { ShopExtended } from './ShopType';

export interface FiltersState {
	isVisible: boolean,
	price: {
		min: number,
		max: number,
	},
	sortDirection: 'up' | 'down',
	shops: ShopExtended[],
}

export enum FiltersActionsTypes {
	UPDATE_FILTERS_VISIBILITY = 'filters/UPDATE_FILTERS_VISIBILITY',
	UPDATE_MIN_PRICE = 'filters/UPDATE_MIN_PRICE',
	UPDATE_MAX_PRICE = 'filters/UPDATE_MAX_PRICE',
	INVERT_SORT_DIRECTION = 'filters/INVERT_SORT_DIRECTION',
	UPDATE_LIST_OF_SHOPS = 'filters/UPDATE_LIST_OF_SHOPS',
}

interface UpdateFiltersVisibility {
	type: FiltersActionsTypes.UPDATE_FILTERS_VISIBILITY;
	payload: 'hide' | 'show';
}

interface UpdateMinMaxPrice {
	type: FiltersActionsTypes.UPDATE_MAX_PRICE | FiltersActionsTypes.UPDATE_MIN_PRICE,
	payload: number,
}

interface InvertSortDirection {
	type: FiltersActionsTypes.INVERT_SORT_DIRECTION
}

interface UpdateListOfShops {
	type: FiltersActionsTypes.UPDATE_LIST_OF_SHOPS,
	payload: {
		id: string,
	}
}

export type FiltersAction =
	UpdateFiltersVisibility
	| UpdateMinMaxPrice
	| InvertSortDirection
	| UpdateListOfShops;
