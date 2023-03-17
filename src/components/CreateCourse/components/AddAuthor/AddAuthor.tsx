import React from 'react';
import Button from '../../../common/Button/Button';
import './addAuthor.css';

type Props = {
	authorsName: string;
	buttonText: string;
	onClick: () => void;
};
function AddAuthor(props: Props) {
	return (
		<div className='authorForm'>
			<p>{props.authorsName}</p>
			<Button
				type='button'
				buttonText={props.buttonText}
				onClick={props.onClick}
			/>
		</div>
	);
}

export default AddAuthor;