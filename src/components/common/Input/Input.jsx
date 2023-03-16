import './input.css';

function Input(props) {
	return (
		<label className='labelWrapper'>
			{props.labelText}
			<input
				type='text'
				minLength='2'
				name={props.name}
				className='inputField'
				placeholder={props.placeholder}
				onChange={props.onChange}
				id={props.id}
			></input>
		</label>
	);
}

export default Input;
