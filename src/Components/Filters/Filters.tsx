import React, { ChangeEvent, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NumberInput } from '../NumberInput';

import './Filters.scss';

export const Filters: React.FunctionComponent = () => {
	const { updateMinPrice, updateMaxPrice } = useActions();
	const { price } = useTypedSelector(state => state.filters);

	const priceLimitations = {
		min: 0,
		max: 1000,
	}

	const [priceTimeout, setPriceTimeout] = useState(0);

	const changePriceHandler = (event: ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
		clearTimeout(priceTimeout);
		const newValue = +event.target.value;
		const DELAY = 1000;

		if (type === 'min') {
			updateMinPrice(newValue);
			setPriceTimeout(window.setTimeout(() => {
				if (newValue > price.max) {
					updateMaxPrice(newValue);
				}
				// updateGoodsList
			}, DELAY))
		} else if (type === 'max') {
			updateMaxPrice(newValue);
			setPriceTimeout(window.setTimeout(() => {
				if (newValue < price.min) {
					updateMinPrice(newValue)
				}
				// updateGoodsList
			}, DELAY))
		}
	}

	return (
		<section className="Filters">
			<div className="Filters__container Filters__row">
				<h3 className="Filters__title">Ціна</h3>
				&nbsp;від&nbsp;
				<NumberInput
					customClassNames="Filters__price-input"
					value={price.min}
					onChange={(event: ChangeEvent<HTMLInputElement>) => { changePriceHandler(event, 'min') }}
					min={priceLimitations.min}
					max={priceLimitations.max}
				/>
				&nbsp;до&nbsp;
				<NumberInput
					customClassNames="Filters__price-input"
					value={price.max}
					onChange={(event: ChangeEvent<HTMLInputElement>) => { changePriceHandler(event, 'max') }}
					min={priceLimitations.min}
					max={priceLimitations.max}
				/>
			</div>

			<div className="Filters__container Filters__row">
				<h3 className="Filters__title">Сортувати</h3>
				switch
			</div>

			<div className="Filters__container">
				<h3 className="Filters__title">Доступні магазини:</h3>
				<div className="Filters__shops-box">
					toggler label ATB * x
					<span>1</span>
					<span>2</span>
				</div>
			</div>
		</section>
	);
}