import React from 'react';
import './textarea.css';

interface Props {
	labelText: string;
	minLength: number;
	value: string;
	onChange: (value: string) => void;
}

const Textarea = ({ labelText, minLength, value, onChange }: Props) => {
	return (
		<label className='labelWrapper'>
			{labelText}
			<textarea
				rows={4}
				cols={50}
				placeholder={labelText}
				className='teaxtAreaInputField'
				minLength={minLength}
				onChange={onChange && ((event) => onChange(event.target.value))}
				value={value}
			></textarea>
		</label>
	);
};
export default Textarea;
