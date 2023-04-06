import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import { BUTTON_TEXT } from '../../constans';

import './header.css';
import { getUser } from '../../store/selectors';
import { logout } from '../../store/user/actionCreators';
import { RootState } from '../../store';

const Header = () => {
	const navigate = useNavigate();
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const { isAuth, name } = useSelector(getUser);

	async function onClick() {
		await dispatch(logout());
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
