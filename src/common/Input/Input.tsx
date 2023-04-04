import React from 'react';
import './input.css';

interface Props {
	labelText?: string;
	type?: 'text' | 'email' | 'password';
	name?: string;
	value?: string;
	placeholder: string;
	onChange?: (value: string | any) => void;
	id?: string;
	minLength?: number;
}

const Input: React.FC<Props> = ({
	labelText,
	type,
	value,
	placeholder,
	onChange,
	id,
	minLength,
}) => {
	return (
		<label className='labelWrapper'>
			{labelText}
			<input
				type={type ? type : 'text'}
				minLength={minLength}
				value={value}
				className='inputField'
				placeholder={placeholder}
				onChange={onChange && ((event) => onChange(event.target.value))}
				id={id}
			></input>
		</label>
	);
};

export default Input;
