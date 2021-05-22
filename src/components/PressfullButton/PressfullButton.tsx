import React, { MouseEventHandler } from 'react';

import './PressfullButton.scss';

interface PressfullButtonPropsType {
	isPressed?: boolean,
	onClick?: MouseEventHandler,
	customClasses?: string | null,
}

export const PressfullButton: React.FunctionComponent<PressfullButtonPropsType> = (
	{ children, isPressed, onClick, customClasses }
) => (
	<button
		className={
			'PressfullButton '
			+ (isPressed ? 'PressfullButton--pressed ' : '')
			+ customClasses
		}
		onClick={onClick || (() => { })}
	>
		<span>{children}</span>
	</button>
)