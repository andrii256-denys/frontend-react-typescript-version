import { CategoryType } from "./CategoryType";


export interface NavigationState {
	currentTab: CategoryType,
}

export enum NavigationActionsTypes {
	UPDATE_CATEGORY = 'UPDATE_CATEGORY',
}

interface UpdateCategory {
	type: NavigationActionsTypes.UPDATE_CATEGORY;
	payload: CategoryType;
}

export type NavigationAction = UpdateCategory | UpdateCategory;
