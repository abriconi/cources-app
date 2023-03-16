import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';

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
				onChange={handleClearInputField}
			/>
			<Button buttonText='Search' type='submit' />
		</form>
	);
}

export default SearchBar;
