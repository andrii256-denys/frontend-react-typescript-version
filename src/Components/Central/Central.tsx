import React, { useEffect } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RadarPreloader } from '../RadarPreloader';
import { useActions } from '../../hooks/useActions'
import { CHEAPER_CASUS_GENETIVUS } from '../../constants/linguistics';

import './Central.scss';

export const Central: React.FunctionComponent = () => {
	const { isError, isLoading, price, href } = useTypedSelector(state => state.goods.cheaper);
	const { currentTab } = useTypedSelector(state => state.navigation);
	const { fetchCheaper } = useActions();

	/* eslint-disable */
	useEffect(() => {
		fetchCheaper(currentTab)
	}, [currentTab]);
	/* eslint-enable */

	return (
		<section className="Central">
			<h1 className="Central__title">
				Ціна {CHEAPER_CASUS_GENETIVUS[currentTab]} в Україні
			</h1>
			<p className={`Central__price-wrapper Central__price-wrapper--${currentTab}`}>
				<span className="Central__digits">
					{isLoading && <RadarPreloader side={100} color="#aaa" />}
					{isError && 'Error'}
					{!isError && !isLoading && price}
				</span>
				<span className="Central__measure-units">грн / кг</span>
			</p>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={`Central__link-to-seller Central__link-to-seller--${currentTab}`}
			>
				відкрити сайт продавця
			</a>
		</section>
	)
}
