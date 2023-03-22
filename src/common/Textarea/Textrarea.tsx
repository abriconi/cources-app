import React from 'react';
import './textarea.css';

interface Props {
	labelText: string;
	name: string;
	minLength: number;
}

const Textarea = (props: Props) => {
	return (
		<label className='labelWrapper'>
			{props.labelText}
			<textarea
				rows={4}
				cols={50}
				name={props.name}
				placeholder={props.labelText}
				className='teaxtAreaInputField'
				minLength={props.minLength}
			></textarea>
		</label>
	);
};
export default Textarea;
