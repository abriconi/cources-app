import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../../../constans';
import { generateUUID } from '../../../../helpers/generateUUID';
import { Author } from '../../../../interfaces';

import './createAuthor.css';

interface Props {
	authorsList: Author[];
	setAuthorsList: (authors: Author[]) => void;
}

const CreateAuthor = ({ authorsList, setAuthorsList }: Props) => {
	const [newAutorName, setNewAutorName] = useState('');

	function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		setNewAutorName(event.target.value);
	}

	function createAuthorObject(inputText: string): Author {
		return {
			id: generateUUID(),
			name: inputText,
		};
	}

	function handleClick() {
		const newAuthor = createAuthorObject(newAutorName);
		setNewAutorName('');
		setAuthorsList([...authorsList, newAuthor]);
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
					value={newAutorName}
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
};
export default CreateAuthor;
