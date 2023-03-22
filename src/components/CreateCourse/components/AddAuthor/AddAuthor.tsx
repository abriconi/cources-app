import React from 'react';
import Button from '../../../../common/Button/Button';

import './addAuthor.css';

interface Props {
	authorsName: string;
	buttonText: string;
	onClick: () => void;
}
const AddAuthor = ({ authorsName, buttonText, onClick }: Props) => {
	return (
		<div className='authorForm'>
			<p>{authorsName}</p>
			<Button type='button' buttonText={buttonText} onClick={onClick} />
		</div>
	);
};

export default AddAuthor;
