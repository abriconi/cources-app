import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { userLogin } from '../../api/userLogin';
import { useNavigate } from 'react-router-dom';

import './login.css';

function Login() {
	type User = {
		email: string;
		password: string;
	};
	const navigate = useNavigate();
	async function handleClick(event: any): Promise<void> {
		event.preventDefault();
		const user: User = {
			email: event.target.email.value,
			password: event.target.password.value,
		};
		await userLogin(user);
		navigate('/courses');
		console.log('user', user);
	}
	return (
		<div className='loginContainer'>
			<h2 className='loginTitle'>Login</h2>
			<form className='loginForm' onSubmit={handleClick}>
				<Input
					labelText='Email'
					type='email'
					name='email'
					placeholder='Enter email'
				/>
				<Input
					labelText='Password'
					type='password'
					name='password'
					placeholder='Enter password'
					minLength={6}
				/>
				<Button type='submit' buttonText='Login' className='loginBtn' />
			</form>
			<p>
				If you not have an account you can{' '}
				<Link to='/registration' className='registrationLink'>
					Registration
				</Link>
			</p>
		</div>
	);
}
export default Login;
