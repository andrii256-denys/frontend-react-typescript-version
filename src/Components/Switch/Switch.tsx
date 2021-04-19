import React, { MouseEventHandler } from 'react';

import './Switch.scss';

interface SwitchProps {
	direction: 'up' | 'down',
	labelWhenUp: string,
	labelWhenDown: string,
	customClassNames?: string,
	onClick: MouseEventHandler,
}

export const Switch: React.FunctionComponent<SwitchProps> = ({
	direction,
	labelWhenDown,
	labelWhenUp,
	customClassNames,
	onClick
}) => {
	return (
		<button
			className={`Switch Switch--${direction} ${customClassNames}`}
			onClick={onClick}
		>
			{direction === 'up' ? labelWhenUp : labelWhenDown}
		</button>
	)
}