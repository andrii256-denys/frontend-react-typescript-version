import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Goods.scss';
import './Good.scss';
import { GoodType } from '../../types/goods';
import classNames from 'classnames';

type GoodProps = GoodType & {
	isLoading: boolean;
}

const Good: React.FunctionComponent<GoodProps> = ({ isLoading, link, pictureLink, pricePerKg, weight, shopName, title }) => {
	return (
		<li className={classNames({
			'Good': true,
			'Good--is-loading': isLoading,
		})}>
			<a href={link} className="Good__link" target="_blank" rel="noreferer noopener">
				<div className="Good__illustration-wrapper">
					<img src={pictureLink} alt={`ілюстрація до товару з назвою ${title}`} className="Good__image" width="100%" height="170px" />
				</div>
				<h3 className="Good__title">
					{title}
				</h3>
				<p className="Good__info-row">
					<span className="Good__producer">{shopName}</span>
					<span className="Good__portion">${weight} г / упакова</span>
				</p>
				<p className="Good__price">
					<span className="Good__price-big">{pricePerKg}</span>
					&nbsp;
					<span className="Good__price-small">грн / кг</span>
				</p>
			</a>
		</li>
	)
}

export const Goods: React.FunctionComponent = () => {
	const { goods, goods: { goodsList } } = useTypedSelector(state => state.goods);
	const { currentTab } = useTypedSelector(state => state.navigation)

	const { fetchGoods } = useActions();

	useEffect(() => {
		fetchGoods();
	}, [])

	useEffect(() => {
		fetchGoods();
	},
	[currentTab])

	return (
		<ul className={classNames({
			'Goods': true,
			'Goods--error': goods.isError,
		})}>
			{!goods.isError && goodsList.map(good => (
				<Good
					key={good.id}
					isLoading={goods.isLoading}
					id={good.id}
					link={good.link}
					title={good.title}
					pictureLink={good.pictureLink}
					pricePerKg={good.pricePerKg}
					shopName={good.shopName}
					weight={good.weight}
				/>
			))}
			{goods.isError && (
				<div className="Goods__error-message">
					Упс, щось пішло не туди😢
					<br />
					Перезавантаж сторінку або спробуй пізніше
				</div>
			)}
		</ul>
	)
}