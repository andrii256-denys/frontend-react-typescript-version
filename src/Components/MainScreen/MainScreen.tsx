import React from 'react';

import { nominativeCase } from '../../linguistics/categoriesNames';
import { CategoryType } from '../../types/linguistics';

import './MainScreen.scss';

export const MainScreen: React.FunctionComponent = () => {
	const category: CategoryType = 'buckwheat';
	return (
		<article className={`MainScreen MainScreen--${category}`}>
			<p className="MainScreen__title">
				{nominativeCase[category]}
			</p>

			<div className="MainScreen__second-row">
				second row here
			</div>
		</article>
	)
}