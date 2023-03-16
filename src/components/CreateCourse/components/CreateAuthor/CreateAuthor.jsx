import { useState } from 'react';
import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';

import { generateUUID } from '../../../helpers/generateUUID';

import './createAuthor.css';

function CreateAuthor(props) {
	const [newAutorName, setNewAutorName] = useState('');
	function handleOnChange(event) {
		setNewAutorName(event.target.value);
	}

	function createAuthorObject(inputText) {
		const newAuthor = {
			id: generateUUID(),
			name: inputText,
		};
		props.setAuthorsList([...props.authorsList, newAuthor]);
	}

	function clearInput() {
		const inputFieldAuthorName = document.getElementById('authorName');
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
					placeholder='Enter author name...'
					onChange={handleOnChange}
					id='authorName'
				></Input>
				<Button
					type='button'
					buttonText='Create author'
					aligning='center'
					onClick={handleClick}
				></Button>
			</div>
		</div>
	);
}
export default CreateAuthor;
