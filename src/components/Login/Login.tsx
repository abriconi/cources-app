import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import { userLogin } from '../../api/userLogin';
import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../constans';
import { User } from '../../interfaces';

import './login.css';

const Login = () => {
	const navigate = useNavigate();
	async function handleClick(event: any): Promise<void> {
		event.preventDefault();
		const user: User = {
			//TODO
			email: event.target.email.value,
			password: event.target.password.value,
		};
		await userLogin(user);
		navigate('/courses');
	}
	return (
		<div className='loginContainer'>
			<h1 className='loginTitle'>Login</h1>
			<form className='loginForm' onSubmit={handleClick}>
				<Input
					labelText='Email'
					type='email'
					name='email'
					placeholder={PLACEHOLDER_TEXT.enterEmail}
				/>
				<Input
					labelText='Password'
					type='password'
					name='password'
					placeholder={PLACEHOLDER_TEXT.enterPassword}
					minLength={6}
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
		</div>
	);
};
export default Login;
