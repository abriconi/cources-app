import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../../../constans';

import './searchBar.css';

interface Props {
	onSearch: (value: string) => void;
}

const SearchBar = (props: Props) => {
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const searchText = (
			event.currentTarget.elements.namedItem('searchText') as HTMLInputElement
		)?.value;
		props.onSearch(searchText);
	}
	function handleClearInputField(event: React.ChangeEvent<HTMLInputElement>) {
		if (event.target.value === '') {
			props.onSearch(event.target.value);
		}
	}

	return (
		<form className='formWrapper' onSubmit={handleSubmit}>
			<Input
				placeholder={PLACEHOLDER_TEXT.enterCourseName}
				name='searchText'
				minLength={2}
				onChange={handleClearInputField}
			/>
			<Button buttonText={BUTTON_TEXT.search} type='submit' />
		</form>
	);
};

export default SearchBar;
