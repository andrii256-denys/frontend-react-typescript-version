export interface StatisticsItem {
	price: number,
	date: Date,
}

export interface StatisticsState {
	isError: boolean,
	isLoading: boolean,
	data: StatisticsItem[],
}

export enum StatiscticsActions {
	FETCH_CHART_DATA = 'statistics/FETCH_CHART_DATA',
	UPDATE_CHART_DATA = 'statistics/UPDATE_CHART_DATA',
	SHOW_ERROR_CHART_DATA = 'statistics/SHOW_ERROR_CHART_DATA',
}

interface FetchChartData {
	type: StatiscticsActions.FETCH_CHART_DATA,
}

interface UpdateChartData {
	type: StatiscticsActions.UPDATE_CHART_DATA,
	payload: StatisticsItem[],
}

interface ShowErrorChartData {
	type: StatiscticsActions.SHOW_ERROR_CHART_DATA,
}

export type StatisticsAction = FetchChartData | UpdateChartData | ShowErrorChartData;
