import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../../../store';
import { addAuthor } from '../../../../store/author/actionCreators';

import Input from '../../../Input/Input';
import Button from '../../../Button/Button';

import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../../../constans';
import { AuthorPayload } from '../../../../interfaces';

import './createAuthor.css';

const CreateAuthor: React.FC = () => {
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const [newAutorName, setNewAutorName] = useState('');

	function createAuthorObject(inputText: string): AuthorPayload {
		return {
			name: inputText,
		};
	}

	function onChange(value: string) {
		setNewAutorName(value);
	}

	function handleClick() {
		if (newAutorName) {
			const newAuthor = createAuthorObject(newAutorName);
			dispatch(addAuthor(newAuthor));
			setNewAutorName('');
		} else {
			alert(`Field 'Author name' is empty`);
		}
	}

	return (
		<div className='addAuthorSectionWrapper'>
			<h3>Add author</h3>
			<div className='addAuthorForm'>
				<Input
					labelText='Author name'
					placeholder={PLACEHOLDER_TEXT.enterAuthorName}
					id='authorName'
					value={newAutorName}
					onChange={onChange}
					data-testid='create-author-input'
				></Input>
				<Button
					className='btnAligningCenter'
					type='button'
					buttonText={BUTTON_TEXT.createAuthor}
					onClick={handleClick}
					data-testid='create-author'
				></Button>
			</div>
		</div>
	);
};
export default CreateAuthor;
