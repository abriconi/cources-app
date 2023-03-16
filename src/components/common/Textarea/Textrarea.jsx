import './textarea.css';

function Textarea(props) {
	return (
		<label className='labelWrapper'>
			{props.labelText}
			<textarea
				rows='4'
				cols='50'
				name={props.name}
				placeholder='Description'
				className='teaxtAreaInputField'
			></textarea>
		</label>
	);
}
export default Textarea;
