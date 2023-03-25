import React from 'react';
import './input.css';

interface Props {
	labelText?: string;
	type?: 'text' | 'email' | 'password';
	name?: string;
	value?: string;
	placeholder: string;
	onChange?: (value: string) => void;
	id?: string;
	minLength?: number;
}

const Input = ({
	labelText,
	type,
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
				type={type ? type : 'text'}
				minLength={minLength}
				value={value}
				name={name}
				className='inputField'
				placeholder={placeholder}
				onChange={onChange && ((event) => onChange(event.target.value))}
				id={id}
			></input>
		</label>
	);
};

export default Input;
