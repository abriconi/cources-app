import React from 'react';
import './button.css';

interface Props {
	className?: string;
	aligning?: string;
	btnSize?: string;
	type: 'submit' | 'button';
	buttonText: string;
	onClick?: () => void;
}

const Button = (props: Props) => {
	return (
		<button
			className={`btnDefaultStyle ${props.btnSize || ''}
			 ${props.className || ''}`}
			type={props.type}
			onClick={props.onClick}
		>
			{props.buttonText}
		</button>
	);
};

export default Button;
