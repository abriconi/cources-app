import React from 'react';
import './textarea.css';

interface Props {
	labelText: string;
	name: string;
	minLength: number;
}

const Textarea = ({ labelText, name, minLength }: Props) => {
	return (
		<label className='labelWrapper'>
			{labelText}
			<textarea
				rows={4}
				cols={50}
				name={name}
				placeholder={labelText}
				className='teaxtAreaInputField'
				minLength={minLength}
			></textarea>
		</label>
	);
};
export default Textarea;
