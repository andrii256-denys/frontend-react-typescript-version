import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { NOMINATIVE_CASE } from '../../constants/linguistics';
import { Navigation } from '../Navigation';

import './MainScreen.scss';
import { Central } from '../Central';

export const MainScreen: React.FunctionComponent = () => {
	const { currentTab: category } = useTypedSelector(state => state.navigation);
	return (
		<article className={`MainScreen MainScreen--${category}`}>
			<p className="MainScreen__title">
				{NOMINATIVE_CASE[category]}
			</p>

			<div className="MainScreen__second-row">
				<Central />
				<Navigation />
			</div>
		</article>
	)
}