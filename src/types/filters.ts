export interface FiltersState {
	isVisible: boolean,
}

export enum FiltersActionsTypes {
	UPDATE_FILTERS_VISIBILITY = 'UPDATE_FILTERS_VISIBILITY',
}

interface UpdateFiltersVisibility {
	type: FiltersActionsTypes.UPDATE_FILTERS_VISIBILITY;
	payload: 'hide' | 'show';
}

export type FiltersAction = UpdateFiltersVisibility | UpdateFiltersVisibility;
