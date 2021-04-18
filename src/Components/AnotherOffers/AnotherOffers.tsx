import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './AnotherOffers.scss';

export const AnotherOffers: React.FunctionComponent = () => {
	const { currentTab } = useTypedSelector(state => state.navigation)

	return (
		<article className={`restrictor1200 AnotherOffers AnotherOffers--${currentTab}`}>
			<div className="AnotherOffers__top-row">
				<h2 className="AnotherOffers__title textChapterTitle">
					Інші ціни
				</h2>
				PressfullButton
				<br></br>
			</div>
			<section className="AnotherOffers__filters">
				price
				<br />
				sort by
				<br></br>
				shops
			</section>
			<div className="AnotherOffers__bottom-row">
				Products should be here
			</div>
		</article>
	);
}