import React from 'react';

import './Central.scss';

export const Central: React.FunctionComponent = () => {
	return (
		<section className="Central">
			<h1 className="Central__title">
				Ціна {'найдешевшої гречки'} в Україні
			</h1>
			<p className={`Central__price-wrapper Central__price-wrapper--${'buckwheat'}`}>
				<span className="Central__digits">
					00
				</span>
				<span className="Central__measure-units">грн / кг</span>
			</p>
			<a
				href={'/'}
				target="_blank"
				rel="noopener noreferrer"
				className={`Central__link-to-seller Central__link-to-seller--${'buckwheat'}`}
			>
				відкрити сайт продавця
			</a>
		</section>
	)
}
