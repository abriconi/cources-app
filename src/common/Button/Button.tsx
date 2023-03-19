import React from 'react';
import './button.css';

type Props = {
	className?: string;
	aligning?: string;
	btnSize?: string;
	type: 'submit' | 'button';
	buttonText: string;
	onClick?: () => void;
};

// TODO: remove aligning property because we dont need this here, додати новий клас пропсами
function Button(props: Props) {
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
}

export default Button;
