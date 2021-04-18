export interface FiltersState {
	isVisible: boolean,
	price: {
		min: number,
		max: number,
	}
}

export enum FiltersActionsTypes {
	UPDATE_FILTERS_VISIBILITY = 'filters/UPDATE_FILTERS_VISIBILITY',
	UPDATE_MIN_PRICE = 'filters/UPDATE_MIN_PRICE',
	UPDATE_MAX_PRICE = 'filters/UPDATE_MAX_PRICE',
}

interface UpdateFiltersVisibility {
	type: FiltersActionsTypes.UPDATE_FILTERS_VISIBILITY;
	payload: 'hide' | 'show';
}

interface UpdateMinMaxPrice {
	type: FiltersActionsTypes.UPDATE_MAX_PRICE | FiltersActionsTypes.UPDATE_MIN_PRICE,
	payload: number,
}

export type FiltersAction = UpdateFiltersVisibility | UpdateMinMaxPrice;
