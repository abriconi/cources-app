import './textarea.css';
import { PLACEHOLDER_TEXT } from '../../constans';

function Textarea(props) {
	return (
		<label className='labelWrapper'>
			{props.labelText}
			<textarea
				rows='4'
				cols='50'
				name={props.name}
				placeholder={PLACEHOLDER_TEXT.description}
				className='teaxtAreaInputField'
			></textarea>
		</label>
	);
}
export default Textarea;
