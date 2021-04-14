import { Dispatch } from 'react';
import { CategoryType } from '../../types/CategoryType';
import { GoodsActionType, GoodsActionsTypes } from '../../types/goods';
import { getCheaper } from '../API';

export const fetchCheaper = (category: CategoryType) => {
	const thunk = async (dispatch: Dispatch<GoodsActionType>) => {
		try {
			dispatch({
				type: GoodsActionsTypes.FETCH_CHEAPER
			});

			const dataFromServer = await getCheaper(category);

			dispatch({
				type: GoodsActionsTypes.UPDATE_CHEAPER,
				payload: {
					href: dataFromServer.href,
					price: dataFromServer.price,
					isError: false,
					isLoading: false,
				}
			})
		} catch (error) {
			console.error(`Can't proceed 'fetchCheaper'. ErrorCode: ${error}`);

			dispatch({
				type: GoodsActionsTypes.UPDATE_IS_ERROR,
			});
		}
	}

	return thunk;
}
