import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Filters } from '../Filters';

import './AnotherOffers.scss';

export const AnotherOffers: React.FunctionComponent = () => {
	const { currentTab } = useTypedSelector(state => state.navigation)
	const { isVisible: isFiltersVisible } = useTypedSelector(state => state.filters)
	const { updateFiltersVisibility } = useActions();

	return (
		<article className={`restrictor1200 AnotherOffers AnotherOffers--${currentTab}`}>
			<div className="AnotherOffers__top-row">
				<h2 className="AnotherOffers__title textChapterTitle">
					Інші ціни
				</h2>
				<button
					className="AnotherOffers__filters-toggler"
					onClick={() => { updateFiltersVisibility(isFiltersVisible ? 'hide' : 'show') }}
				>
					{isFiltersVisible ? 'Сховати' : 'Показати'} фільтри
				</button>
				<br></br>
			</div>
			{isFiltersVisible && <Filters />}
			<div className="AnotherOffers__bottom-row">
				Products should be here
			</div>
		</article>
	);
}