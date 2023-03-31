import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import { BUTTON_TEXT } from '../../constans';
import { RootState } from '../../store';

import './header.css';

const Header = () => {
	const navigate = useNavigate();
	const { isAuth, name } = useSelector((state: RootState) => state.user);

	function onClick() {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		navigate('/login');
	}

	return (
		<div className='header'>
			<Logo />
			<div className='loginWrapper'>
				<p>{name}</p>

				{isAuth && (
					<Button
						buttonText={BUTTON_TEXT.logout}
						type={'button'}
						onClick={onClick}
					></Button>
				)}
			</div>
		</div>
	);
};

export default Header;
