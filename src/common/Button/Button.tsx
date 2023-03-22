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

const Button = ({ className, btnSize, type, buttonText, onClick }: Props) => {
	return (
		<button
			className={`btnDefaultStyle ${btnSize || ''}
			 ${className || ''}`}
			type={type}
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
