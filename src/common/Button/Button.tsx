import React from 'react';
import './button.css';

interface Props {
	className?: string;
	btnSize?: string;
	type: 'submit' | 'button';
	buttonText?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	children?: React.ReactNode;
}

const Button: React.FC<Props> = ({
	className,
	btnSize,
	buttonText,
	children,
	...restProps
}) => (
	<button
		className={`btnDefaultStyle ${btnSize || ''}
		 ${className || ''}`}
		{...restProps}
	>
		{buttonText || children}
	</button>
);

export default Button;
