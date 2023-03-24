import React from 'react';
import './input.css';

interface Props {
	labelText?: string;
	name?: string;
	value?: string;
	placeholder: string;
	onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	minLength?: number;
}

const Input = ({
	labelText,
	name,
	value,
	placeholder,
	onChange,
	id,
	minLength,
}: Props) => {
	return (
		<label className='labelWrapper'>
			{labelText}
			<input
				type='text'
				minLength={minLength}
				value={value}
				name={name}
				className='inputField'
				placeholder={placeholder}
				onChange={onChange}
				id={id}
			></input>
		</label>
	);
};

export default Input;
