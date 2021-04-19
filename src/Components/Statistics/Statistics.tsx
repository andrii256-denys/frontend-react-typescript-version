import React from 'react';
import { Chart } from '../Chart'

export const Statistics: React.FunctionComponent = () => {
	return (
		<article className="Statistics restrictor">
			<h2 className="textChapterTitle Statistics__title">
				Статистика цін
			</h2>
			<Chart />
		</article>
	)
}