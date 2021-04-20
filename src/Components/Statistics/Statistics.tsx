import React from 'react';
import { Chart } from '../Chart'

import './Statistics.scss';

export const Statistics: React.FunctionComponent = () => {
	return (
		<article className="Statistics restrictor1200">
			<h2 className="textChapterTitle Statistics__title">
				Статистика цін
			</h2>
			<div className="Statistics__chart-container">
				<Chart />
			</div>
		</article>
	)
}