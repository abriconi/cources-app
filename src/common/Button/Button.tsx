import React from 'react';
import './button.css';

interface Props {
	className?: string;
	btnSize?: string;
	type: 'submit' | 'button';
	buttonText: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({
	className,
	btnSize,
	buttonText,
	...restProps
}) => (
	<button
		className={`btnDefaultStyle ${btnSize || ''}
		 ${className || ''}`}
		{...restProps}
	>
		{buttonText}
	</button>
);

export default Button;
