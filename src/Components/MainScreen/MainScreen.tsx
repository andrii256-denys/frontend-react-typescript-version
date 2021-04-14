import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { nominativeCase } from '../../linguistics/categoriesNames';
import { Navigation } from '../Navigation';

import './MainScreen.scss';

export const MainScreen: React.FunctionComponent = () => {
	const { currentTab: category } = useTypedSelector(state => state.navigation);
	return (
		<article className={`MainScreen MainScreen--${category}`}>
			<p className="MainScreen__title">
				{nominativeCase[category]}
			</p>

			<div className="MainScreen__second-row">
				Main Square
				<Navigation />
			</div>
		</article>
	)
}