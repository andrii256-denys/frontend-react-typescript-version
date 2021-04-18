import { GoodsActionsTypes, GoodsActionType, GoodsState } from "../../types/goods";

const initialState: GoodsState = {
	cheaper: {
		isError: false,
		isLoading: true,
		href: '',
		price: null,
	}
}

export const goodsReducer = (state: GoodsState = initialState, action: GoodsActionType): GoodsState => {
	switch (action.type) {
		case GoodsActionsTypes.FETCH_CHEAPER:
			return {
				...state,
				cheaper: {
					isError: false,
					isLoading: true,
					href: '',
					price: null,
				}
			}

		case GoodsActionsTypes.UPDATE_CHEAPER:
			return {
				...state,
				cheaper: action.payload,
			}

		case GoodsActionsTypes.UPDATE_IS_ERROR:
			return {
				...state,
				cheaper: {
					isError: true,
					isLoading: false,
					href: '',
					price: null,
				}
			}

		default:
			return state;
	}
}
