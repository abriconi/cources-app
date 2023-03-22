import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../../../constans';
import { AuthorSever } from '../../../../interfaces';
// import { postAuthor } from '../../../../api/postAuthor'; // use for posting new Author to author's list

import './createAuthor.css';

// const author = {
// 	name: 'Alona Author',
// };
// const token =
// 	'OwYL6Oe0GoUXhMb8NxcCcAcY9EkFZkL7XvTqCj4u2iJrAJjDhuPtOuch8wZAVw2FbPw8y4jpCRRJerO2r3Ow4jmLHmMx+ltLaq2bEbEv4pKbJrPo8bwt3dSDnLjaY2aSfioTqFxCfDyXf+8uTjaZQRa9eYxRCwszxTIw+mpy0iZgWJtpPZa2N2vtgxtNYpgP9nuXs0b7KZ7H1xt3JVc+AR1+NImtp7FnDgr+VgM2YSF9wDkXj3zCvJZ5B0UvbwrIiEW2McbPg8puu7QTpo/rcQ8WZjMeQc5CMf6Bsye2ALydeAlxjn58AtPiCWZKsfsColoS5gUxT0v1HjUozjC+lw==';

// postAuthor(author, token);

function CreateAuthor() {
	const [newAutorName, setNewAutorName] = useState('');
	function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		setNewAutorName(event.target.value);
	}

	function createAuthorObject(inputText: string) {
		const newAuthor: AuthorSever = {
			name: inputText,
		};
		console.log('new Author', newAuthor);
		// TODO add author to author's list on sever, use function authorPost(name, token - from LocalStorage)
	}

	function clearInput(): void {
		const inputFieldAuthorName = document.getElementById(
			'authorName'
		) as HTMLInputElement;
		if (inputFieldAuthorName.value !== '') {
			inputFieldAuthorName.value = '';
		}
	}

	function handleClick() {
		createAuthorObject(newAutorName);
		clearInput();
	}

	return (
		<div className='addAuthorSectionWrapper'>
			<h3>Add author</h3>
			<div className='addAuthorForm'>
				<Input
					name='createAuthor'
					labelText='Author name'
					placeholder={PLACEHOLDER_TEXT.enterAuthorName}
					onChange={handleOnChange}
					id='authorName'
					type='text'
				></Input>
				<Button
					className='btnAligningCenter'
					type='button'
					buttonText={BUTTON_TEXT.createAuthor}
					onClick={handleClick}
				></Button>
			</div>
		</div>
	);
}
export default CreateAuthor;
