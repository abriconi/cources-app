import React, { useEffect, useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../../../constans';

import './searchBar.css';

interface Props {
	onSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (searchText === '') {
			onSearch(searchText);
		}
	}, [searchText, onSearch]);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		onSearch(searchText);
	}

	return (
		<form className='formWrapper' onSubmit={handleSubmit}>
			<Input
				placeholder={PLACEHOLDER_TEXT.enterCourseName}
				value={searchText}
				onChange={setSearchText}
			/>
			<Button buttonText={BUTTON_TEXT.search} type='submit' />
		</form>
	);
};

export default SearchBar;
