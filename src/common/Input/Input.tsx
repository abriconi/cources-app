import React from 'react';
import './input.css';

interface Props {
	labelText?: string;
	name: string;
	placeholder: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	minLength?: number;
}

const Input = ({
	labelText,
	name,
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
