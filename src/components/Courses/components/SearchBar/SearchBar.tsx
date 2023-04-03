import React, { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../../../constans';

import './searchBar.css';

interface Props {
	onSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }: Props) => {
	const [searchText, setSearchText] = useState('');

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		onSearch(searchText);
	}
	const onChange = (value: string) => {
		setSearchText(value);
	};

	return (
		<form className='formWrapper' onSubmit={handleSubmit}>
			<Input
				placeholder={PLACEHOLDER_TEXT.enterCourseName}
				value={searchText}
				onChange={onChange}
			/>
			<Button buttonText={BUTTON_TEXT.search} type='submit' />
		</form>
	);
};

export default SearchBar;
