import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';
import { BUTTON_TEXT } from '../../../constans';

import './searchBar.css';

function SearchBar(props) {
	function handleSubmit(event) {
		event.preventDefault();
		props.onSearch(event.target.searchText.value);
	}
	function handleClearInputField(event) {
		if (event.target.value === '') {
			props.onSearch(event.target.value);
		}
	}

	return (
		<form className='formWrapper' onSubmit={handleSubmit}>
			<Input
				placeholder='Enter course name...'
				name='searchText'
				minLength='2'
				onChange={handleClearInputField}
			/>
			<Button buttonText={BUTTON_TEXT.search} type='submit' />
		</form>
	);
}

export default SearchBar;
