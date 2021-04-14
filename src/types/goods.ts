export interface CheaperType {
	isLoading: boolean,
	isError: boolean,
	price: number | null,
	href: string,
}

export interface GoodsState {
	cheaper: CheaperType,
}

export enum GoodsActionsTypes {
	FETCH_CHEAPER = 'FETCH_CHEAPER',
	UPDATE_CHEAPER = 'UPDATE_CHEAPER',
	UPDATE_IS_ERROR = 'UPDATE_IS_ERROR'
}

interface FetchCheaper {
	type: GoodsActionsTypes.FETCH_CHEAPER
}

interface UpdateCheaper {
	type: GoodsActionsTypes.UPDATE_CHEAPER,
	payload: CheaperType,
}

interface UpdateIsError {
	type: GoodsActionsTypes.UPDATE_IS_ERROR,
}

export type GoodsActionType =
	FetchCheaper
	| UpdateCheaper
	| UpdateIsError;
