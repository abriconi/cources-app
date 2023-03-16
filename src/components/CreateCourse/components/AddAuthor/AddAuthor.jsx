import Button from '../../../common/Button/Button';
import './addAuthor.css';

function AddAuthor(props) {
	return (
		<div className='authorForm'>
			<p>{props.authorsName}</p>
			<Button
				type='button'
				buttonText={props.buttonText}
				onClick={props.onClick}
			/>
		</div>
	);
}

export default AddAuthor;
