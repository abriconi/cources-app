import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../../../constans';
import { generateUUID } from '../../../../helpers/generateUUID';
import { Author } from '../../../../interfaces';

import './createAuthor.css';

type Props = {
	authorsList: Author[];
	setAuthorsList: (authors: Author[]) => void;
};

function CreateAuthor(props: Props) {
	const [newAutorName, setNewAutorName] = useState('');
	function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		setNewAutorName(event.target.value);
	}

	function createAuthorObject(inputText: string) {
		const newAuthor = {
			id: generateUUID(),
			name: inputText,
		};
		props.setAuthorsList([...props.authorsList, newAuthor]); // primary list of authors
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
