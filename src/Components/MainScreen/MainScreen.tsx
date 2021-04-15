import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { CASUS_NOMINATIVUS } from '../../constants/linguistics';
import { Navigation } from '../Navigation';

import './MainScreen.scss';
import { Central } from '../Central';

export const MainScreen: React.FunctionComponent = () => {
	const { currentTab: category } = useTypedSelector(state => state.navigation);
	return (
		<article className={`MainScreen MainScreen--${category}`}>
			<p className="MainScreen__title">
				{CASUS_NOMINATIVUS[category]}
			</p>

			<div className="MainScreen__second-row">
				<Central />
				<Navigation />
			</div>
		</article>
	)
}