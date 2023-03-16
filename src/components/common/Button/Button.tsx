import React from 'react';
import './button.css';

type Props = {
	aligning?: string;
	btnSize?: string;
	position?: string;
	type: 'submit' | 'button';
	buttonText: string;
	onClick?: () => void;
};

function Button(props: Props) {
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
