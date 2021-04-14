import React from 'react';

import './Navigation.scss';

export const Navigation: React.FunctionComponent = () => {
	return (
		<nav className="Navigation">
			<h2 className="textChapterTitle Navigation__title">
				Інші категорії
			</h2>
			<ul className="Navigation__ul">
				<li className="Navigation__wrapper Navigation__wrapper--corn">
					<button className="Navigation__button Navigation__button--corn EVENT-change-category-button" data-target-category="corn">Кукурудза</button>
				</li>
				<li className="Navigation__wrapper Navigation__wrapper--active Navigation__wrapper--buckwheat">
					<button className="Navigation__button Navigation__button--buckwheat EVENT-change-category-button" data-target-category="buckwheat">Гречка</button>
				</li>
				<li className="Navigation__wrapper Navigation__wrapper--rice">
					<button className="Navigation__button Navigation__button--rice EVENT-change-category-button" data-target-category="rice">Рис</button>
				</li>
				<li className="Navigation__wrapper Navigation__wrapper--barley">
					<button className="Navigation__button Navigation__button--barley EVENT-change-category-button" data-target-category="barley">Ячмінь</button>
				</li>
				<li className="Navigation__wrapper Navigation__wrapper--wheat">
					<button className="Navigation__button Navigation__button--wheat EVENT-change-category-button" data-target-category="wheat">Пшениця</button>
				</li>
			</ul>
		</nav>
	)
}
