import { FiltersAction, FiltersActionsTypes } from "../../types/filters"

export const updateFiltersVisibility = (payload: 'hide' | 'show'): FiltersAction => {
	return {
		type: FiltersActionsTypes.UPDATE_FILTERS_VISIBILITY,
		payload: payload,
	}
}
