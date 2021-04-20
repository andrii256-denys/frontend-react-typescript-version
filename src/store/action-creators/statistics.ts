import { Dispatch } from "react";
import { StatiscticsActions, StatisticsAction, StatisticsItem } from "../../types/statistics";
import { getChartData } from "../API";
import { RootState } from "../reducers";

export const updateChartData = (data: StatisticsItem[]): StatisticsAction => ({
	type: StatiscticsActions.UPDATE_CHART_DATA,
	payload: data,
});

export const showErrorChartData = (): StatisticsAction => ({
	type: StatiscticsActions.SHOW_ERROR_CHART_DATA,
})

export const fetchChartData = () => {
	const thunk = async (dispatch: Dispatch<StatisticsAction>, getState: () => RootState) => {
		dispatch({
			type: StatiscticsActions.FETCH_CHART_DATA,
		});

		try {
			const { currentTab } = getState().navigation;

			const data = await getChartData(currentTab);

			dispatch({
				type: StatiscticsActions.UPDATE_CHART_DATA,
				payload: data,
			})
		} catch (error) {
			console.error('Cant process fetchChartData,', error)
			dispatch({
				type: StatiscticsActions.SHOW_ERROR_CHART_DATA
			})
		}
	}

	return thunk;
}

