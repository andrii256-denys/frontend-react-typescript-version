import React, { ChangeEventHandler, FormEventHandler } from 'react';

import './NumberInput.scss';

type NumberInputProps = {
	onChange: FormEventHandler,
	value: number,
	customClassNames?: string,
	min: number,
	max: number,
	name?: string,
}

export const NumberInput: React.FunctionComponent<NumberInputProps> = ({
	onChange,
	value,
	customClassNames,
	name
}) => (
	<input
		type="number"
		onChange={onChange}
		value={value}
		min={0}
		max={1000}
		name={name}
		className={`NumberInput ${customClassNames}`}
	/>
)
