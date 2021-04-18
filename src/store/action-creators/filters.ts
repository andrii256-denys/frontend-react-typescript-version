import { FiltersAction, FiltersActionsTypes } from "../../types/filters"

export const updateFiltersVisibility = (payload: 'hide' | 'show'): FiltersAction => {
	return {
		type: FiltersActionsTypes.UPDATE_FILTERS_VISIBILITY,
		payload: payload,
	}
}

export const updateMinPrice = (newMin: number): FiltersAction => {
	return {
		type: FiltersActionsTypes.UPDATE_MIN_PRICE,
		payload: newMin,
	}
}
export const updateMaxPrice = (newMax: number): FiltersAction => {
	return {
		type: FiltersActionsTypes.UPDATE_MAX_PRICE,
		payload: newMax,
	}
}
