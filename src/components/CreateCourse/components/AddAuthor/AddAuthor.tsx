import React from 'react';
import Button from '../../../../common/Button/Button';

import './addAuthor.css';

interface Props {
	authorsName: string;
	buttonText: string;
	onClick: () => void;
}
const AddAuthor = (props: Props) => {
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
};

export default AddAuthor;
