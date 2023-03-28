import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import { userLogin } from '../../api/userLogin';
import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../constans';
import { User } from '../../interfaces';

import './login.css';

const Login = () => {
	const navigate = useNavigate();
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	function handleOnChangeEmailField(value: string) {
		setUserEmail(value);
	}
	function handleOnChangePasswordField(value: string) {
		setUserPassword(value);
	}

	async function handleClick(
		event: React.FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault();
		try {
			const user: User = {
				password: userPassword,
				email: userEmail,
			};
			await userLogin(user);
			navigate('/courses');
		} catch (error) {
			setErrorMessage('Incorrect email or password');
		}
	}
	return (
		<div className='loginContainer'>
			<h1 className='loginTitle'>Login</h1>
			<form className='loginForm' onSubmit={handleClick}>
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
			{errorMessage && <p className='loginError'>{errorMessage}</p>}
		</div>
	);
};
export default Login;
