import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../../../constans';

import './searchBar.css';

interface Props {
	searchText: string;
	setSearchText: (searchText: string) => void;
	onSearch: (value: string) => void;
	onClick: () => void;
}

const SearchBar: React.FC<Props> = ({
	searchText,
	setSearchText,
	onSearch,
	onClick,
}: Props) => {
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		onSearch(searchText);
		onClick();
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
