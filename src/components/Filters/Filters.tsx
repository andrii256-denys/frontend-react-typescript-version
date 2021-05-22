import React, { ChangeEvent, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NumberInput } from '../NumberInput';
import { Switch } from '../Switch';
import { Toggler } from '../Toggler/Toggler';

import './Filters.scss';

export const Filters: React.FunctionComponent = () => {
	const { updateMinPrice, updateMaxPrice, invertSortDirection, updateListOfShops, fetchGoods } = useActions();
	const { price, sortDirection, shops } = useTypedSelector(state => state.filters);
	const { currentTab } = useTypedSelector(state => state.navigation)

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
				fetchGoods();
			}, DELAY))
		} else if (type === 'max') {
			updateMaxPrice(newValue);
			setPriceTimeout(window.setTimeout(() => {
				if (newValue < price.min) {
					updateMinPrice(newValue)
				}
				fetchGoods();
			}, DELAY))
		}
	}

	return (
		<section className={`Filters Filters--${currentTab}`}>
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
				&nbsp;&nbsp;
				<Switch
					direction={sortDirection}
					labelWhenUp="спершу Дешевші"
					labelWhenDown="спершу Дорожі"
					onClick={() => { invertSortDirection(); fetchGoods(); }}
					customClassNames="Filters__switch"
				/>
			</div>

			<div className="Filters__container">
				<h3 className="Filters__title">Доступні магазини:</h3>
				<ul className="Filters__shops-box">
					{shops.map(shop => (
						<Toggler
							key={shop.id}
							checked={shop.allowed}
							onChange={() => { updateListOfShops(shop.id); fetchGoods(); }}
							rightLable={shop.humanName}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}