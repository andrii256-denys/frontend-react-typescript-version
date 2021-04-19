import { Dispatch } from 'react';
import { CategoryType } from '../../types/CategoryType';
import { GoodsActionType, GoodsActionsTypes } from '../../types/goods';
import { getCheaper, getGoods } from '../API';
import { RootState } from '../reducers';

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
				type: GoodsActionsTypes.UPDATE_IS_CHEAPER_ERROR,
			});
		}
	}

	return thunk;
}

export const fetchGoods = () => {
	const thunk = async (dispatch: Dispatch<GoodsActionType>, getState: () => RootState) => {
		dispatch({
			type: GoodsActionsTypes.FETCH_GOODS,
		})

		try {
			const state = getState();
			const minPrice = state.filters.price.min;
			const maxPrice = state.filters.price.max;
			const shops = state.filters.shops.filter(shop => shop.allowed).map(shop => shop.id);
			const sortDirection = state.filters.sortDirection;

			const dataFromServer = await getGoods(
				minPrice, maxPrice, shops, sortDirection,
			);

			dispatch({
				type: GoodsActionsTypes.UPDATE_GOODS,
				payload: dataFromServer,
			})
		} catch (error) {
			console.error(`Can't proceed fetchGoods, ${error}`)

			dispatch({
				type: GoodsActionsTypes.UPDATE_IS_GOODS_ERROR,
			})
		}
	}

	return thunk;
}