export interface CheaperType {
	isLoading: boolean,
	isError: boolean,
	price: number | null,
	href: string,
}

export interface GoodType {
	id: number | string,
	title: string,
	link: string,
	pictureLink: string,
	shopName: string,
	weight: number,
	pricePerKg: number,
}


export interface GoodsState {
	cheaper: CheaperType,
	goods: {
		isLoading: boolean,
		isError: boolean,
		goodsList: GoodType[]
	}
}

export enum GoodsActionsTypes {
	FETCH_CHEAPER = 'goods/FETCH_CHEAPER',
	UPDATE_CHEAPER = 'goods/UPDATE_CHEAPER',
	UPDATE_IS_CHEAPER_ERROR = 'goods/UPDATE_IS_ERROR',
	FETCH_GOODS = 'goods/FETCH_GOODS',
	UPDATE_GOODS = 'goods/UPDATE_GOODS',
	UPDATE_IS_GOODS_ERROR = 'goods/UPDATE_IS_GOODS_ERROR',
}

interface FetchCheaper {
	type: GoodsActionsTypes.FETCH_CHEAPER
}

interface UpdateCheaper {
	type: GoodsActionsTypes.UPDATE_CHEAPER,
	payload: CheaperType,
}

interface UpdateIsCheaperError {
	type: GoodsActionsTypes.UPDATE_IS_CHEAPER_ERROR,
}

interface FetchGoods {
	type: GoodsActionsTypes.FETCH_GOODS;
}

interface UpdateGoods {
	type: GoodsActionsTypes.UPDATE_GOODS,
	payload: GoodType[]
}

interface UpdateIsGoodsError {
	type: GoodsActionsTypes.UPDATE_IS_GOODS_ERROR,
}

export type GoodsActionType =
	FetchCheaper
	| UpdateCheaper
	| UpdateIsCheaperError
	| FetchGoods
	| UpdateGoods
	| UpdateIsGoodsError;
