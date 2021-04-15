import React from 'react';
import classNames from 'classnames';

import { CategoryType } from '../../types/CategoryType';
import { CASUS_NOMINATIVUS } from '../../constants/linguistics';
import { POSSIBLE_CATEGORIES } from '../../constants/POSSIBLE_CATEGORIES';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import './Navigation.scss';

interface LinkPropsType {
	itsCategory: CategoryType,
	activeCategory: CategoryType,
}

const Link: React.FunctionComponent<LinkPropsType> = ({ itsCategory, activeCategory }) => {
	const { updateCategory } = useActions();

	return (
		<li className={classNames({
			"Navigation__wrapper": true,
			'Navigation__wrapper--active': activeCategory === itsCategory,
		})}>
			<button
				className={`Navigation__button Navigation__button--${activeCategory}-mode`}
				onClick={() => updateCategory(itsCategory)}
			>
				{CASUS_NOMINATIVUS[itsCategory]}
			</button>
		</li>
	)
}

export const Navigation: React.FunctionComponent = () => {
	const { currentTab: activeCategory } = useTypedSelector(state => state.navigation);

	return (
		<nav className="Navigation">
			<h2 className="textChapterTitle Navigation__title">
				Інші категорії
			</h2>
			<ul className="Navigation__ul">
				{POSSIBLE_CATEGORIES.map(category => (
					<Link
						itsCategory={category}
						activeCategory={activeCategory}
						key={category}
					/>
				))}
			</ul>
		</nav>
	)
}
