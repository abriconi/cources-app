import React, { useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { getUser } from '../../store/selectors';
import { login, usersMe } from '../../store/user/actionCreators';
import { courses } from '../../store/courses/actionCreators';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../constans';
import { UserDataAuth } from '../../interfaces';

import './login.css';
import { authors } from '../../store/author/actionCreators';

const Login = () => {
	const navigate = useNavigate();
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const { error } = useSelector(getUser);

	function handleOnChangeEmailField(value: string) {
		setUserEmail(value);
	}
	function handleOnChangePasswordField(value: string) {
		setUserPassword(value);
	}

	async function handleFormSubmit(
		event: React.FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault();
		const user: UserDataAuth = {
			password: userPassword,
			email: userEmail,
		};

		await dispatch(login(user));
		await dispatch(usersMe());
		await dispatch(courses());
		await dispatch(authors());
		navigate('/courses');
	}

	return (
		<div className='loginContainer'>
			<h1 className='loginTitle'>Login</h1>
			<form className='loginForm' onSubmit={handleFormSubmit}>
				<Input
					labelText='Email'
					type='email'
					value={userEmail}
					placeholder={PLACEHOLDER_TEXT.enterEmail}
					onChange={handleOnChangeEmailField}
				/>
				<Input
					labelText='Password'
					type='password'
					placeholder={PLACEHOLDER_TEXT.enterPassword}
					minLength={6}
					value={userPassword}
					onChange={handleOnChangePasswordField}
				/>
				<Button
					type='submit'
					buttonText={BUTTON_TEXT.login}
					className='loginBtn'
				/>
			</form>
			<p>
				If you not have an account you can{' '}
				<Link to='/registration' className='registrationLink'>
					Registration
				</Link>
			</p>
			{error && <p className='loginError'>{error}</p>}
		</div>
	);
};
export default Login;
