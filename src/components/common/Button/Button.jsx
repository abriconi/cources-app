import React from 'react';
import './button.css';

function Button(props) {
	return (
		<button
			className={`btnDefaultStyle ${props.btnSize || ''} ${
				props.aligning || ''
			} ${props.position}`}
			type={props.type}
			onClick={props.onClick}
		>
			{props.buttonText}
		</button>
	);
}

export default Button;
