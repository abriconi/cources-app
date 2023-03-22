import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import { BUTTON_TEXT } from '../../constans';

import './header.css';

const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<div className='loginWrapper'>
				<p>Dave</p>
				<Button
					buttonText={BUTTON_TEXT.logout}
					btnSize=''
					type={'button'}
				></Button>
			</div>
		</div>
	);
};

export default Header;
