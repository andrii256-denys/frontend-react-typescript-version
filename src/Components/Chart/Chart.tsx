import React from 'react';
import { LineChart, Line } from 'recharts'

export const Chart: React.FunctionComponent = () => {
	const data = [
		{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
		{ name: 'Page B', uv: 300, pv: 2000, amt: 1600 },
		{ name: 'Page C', uv: 600, pv: 1500, amt: 1750 },
		{ name: 'Page D', uv: 200, pv: 3500, amt: 2800 },
	];
	return (
		<LineChart width={400} height={400} data={data}>
			<Line type="monotone" dataKey="uv" stroke="#8884d8" />
		</LineChart>
	)
}