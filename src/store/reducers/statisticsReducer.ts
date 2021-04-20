import { StatiscticsActions, StatisticsAction, StatisticsState } from '../../types/statistics';

const initialState: StatisticsState = {
	isError: false,
	isLoading: false,
	data: [],
}

export const statisticsReducer = (
	state: StatisticsState = initialState, action: StatisticsAction
	): StatisticsState => {
	switch (action.type) {

		case StatiscticsActions.FETCH_CHART_DATA:
			return {
				...state,
				isError: false,
				isLoading: true,
			};

		case StatiscticsActions.UPDATE_CHART_DATA:
			return {
				isError: false,
				isLoading: false,
				data: action.payload,
			}

		case StatiscticsActions.SHOW_ERROR_CHART_DATA:
			return {
				isError: true,
				isLoading: false,
				data: [],
			}

		default:
			return state;
	}
}