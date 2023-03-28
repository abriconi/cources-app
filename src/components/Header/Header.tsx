import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import { BUTTON_TEXT } from '../../constans';

import './header.css';

const Header = () => {
	const navigate = useNavigate();
	const userName = localStorage.getItem('name');

	function onClick() {
		localStorage.removeItem('token');
		localStorage.removeItem('name');
		navigate('/login');
	}

	return (
		<div className='header'>
			<Logo />
			<div className='loginWrapper'>
				<p>{userName}</p>
				<Button
					buttonText={BUTTON_TEXT.logout}
					btnSize=''
					type={'button'}
					onClick={onClick}
				></Button>
			</div>
		</div>
	);
};

export default Header;
