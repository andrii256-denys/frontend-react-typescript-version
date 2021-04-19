import classNames from 'classnames';
import React, { ChangeEventHandler, useMemo } from 'react';

import './Toggler.scss';

interface TogglerProps {
	checked: boolean,
	onChange: ChangeEventHandler,
	leftLable?: string,
	rightLable?: string,
	key?: any,
}

export const Toggler: React.FunctionComponent<TogglerProps> = ({
	checked,
	onChange,
	leftLable,
	rightLable
}) => {
	const inputId = useMemo(() => `${Math.random()}`, [])

	return (
		<div
			className="Toggler"
		>
			{leftLable && (
				<label
					className={classNames({
						'Toggler__label': true,
						'Toggler__label--left': true,
						'Toggler__label--active': !checked,
					})}
					htmlFor={inputId}
				>
					{leftLable}
				</label>
			)}

			<input
				id={inputId}
				checked={checked}
				onChange={onChange}
				type="checkbox"
				className="Toggler__input-checkbox"
			/>

			{rightLable && (
				<label
					className={classNames({
						'Toggler__label': true,
						'Toggler__label--right': true,
						'Toggler__label--active': checked,
					})}
					htmlFor={inputId}
				>
					{rightLable}
				</label>
			)}
		</div>
	)
}