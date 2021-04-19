import { GoodsActionsTypes, GoodsActionType, GoodsState } from "../../types/goods";

const initialState: GoodsState = {
	cheaper: {
		isError: false,
		isLoading: true,
		href: '',
		price: null,
	},
	goods: {
		isError: false,
		isLoading: false,
		goodsList: [
			{
				id: 1,
				pictureLink: 'http://images.huffingtonpost.com/2015-07-08-1436374933-6373539-Buckwheat_600_x_450.jpg',
				pricePerKg: 50,
				shopName: 'Таврія В',
				weight: 800,
				link: 'http://shit.com',
				title: 'Гордон в шоколаді'
			}
		]
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

		case GoodsActionsTypes.UPDATE_IS_CHEAPER_ERROR:
			return {
				...state,
				cheaper: {
					isError: true,
					isLoading: false,
					href: '',
					price: null,
				}
			}

		case GoodsActionsTypes.FETCH_GOODS:
			return {
				...state,
				goods: {
					...state.goods,
					isError: false,
					isLoading: true,
				}
			}

		case GoodsActionsTypes.UPDATE_GOODS:
			return {
				...state,
				goods: {
					...state.goods,
					isError: false,
					isLoading: false,
					goodsList: action.payload,
				}
			}

		case GoodsActionsTypes.UPDATE_IS_GOODS_ERROR:
			return {
				...state,
				goods: {
					...state.goods,
					isError: true,
					isLoading: false,
					goodsList: [],
				}
			}

		default:
			return state;
	}
}
