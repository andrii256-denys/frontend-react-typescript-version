import classNames from 'classnames';
import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MONTHS_NAMES } from '../../constants/linguistics';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Chart.scss';

const calcWidth = (): number => {
	const viewport = document.body.offsetWidth;
	let maxWidth: number;

	if (viewport > 1260) {
		maxWidth = 1200;
	} else {
		maxWidth = viewport - 60;
	}

	return maxWidth;
}

export const Chart = () => {
	const { data: rawData, isLoading, isError } = useTypedSelector(state => state.statistics);
	const { currentTab } = useTypedSelector(state => state.navigation);
	const { fetchChartData } = useActions();

	const data = rawData
		.map(item => ({
			...item,
			date: `${item.date.getDate()} ${MONTHS_NAMES.casusGenetivus[item.date.getMonth()]}`,
		}))

	useEffect(() => {
		fetchChartData();
	}, [currentTab])

	return (
		<div className="Chart">
			<div className={classNames('Chart__wrapper', { 'Chart__wrapper--hidden': isLoading || isError })}>
				<LineChart
					width={calcWidth()}
					height={300}
					data={data}
				>
					<XAxis dataKey="date" />
					<YAxis />
					<Tooltip />
					<Line type="basis" dataKey="price" name="ціна" stroke="#542511" activeDot={{ r: 8 }} />
				</LineChart>
			</div>
			{isLoading && (<div className="Chart__status-message Chart__status-message">Loading...</div>)}
			{isError && (<div className="Chart__status-message Chart__status-message">Ooops, error ocured</div>)}
		</div>
	)
}
