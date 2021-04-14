import { Dispatch } from 'react';
import { POSSIBLE_CATEGORIES } from '../../constants/POSSIBLE_CATEGORIES';
import { CategoryType } from '../../types/CategoryType';
import { NavigationAction, NavigationActionsTypes } from '../../types/navigation';

export const updateCategory = (
	newCategory: CategoryType = POSSIBLE_CATEGORIES[0]
): NavigationAction => ({
	type: NavigationActionsTypes.UPDATE_CATEGORY,
	payload: newCategory,
})
