import './input.css';

function Input(props) {
	return (
		<label className='labelWrapper'>
			{props.labelText}
			<input
				type='text'
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
