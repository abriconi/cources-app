import React from 'react';
import './input.css';

type Props = {
	labelText?: string;
	name: string;
	placeholder: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	minLength?: number;
};

const Input = (props: Props) => {
	return (
		<label className='labelWrapper'>
			{props.labelText}
			<input
				type='text'
				minLength={props.minLength}
				name={props.name}
				className='inputField'
				placeholder={props.placeholder}
				onChange={props.onChange}
				id={props.id}
			></input>
		</label>
	);
};

export default Input;
