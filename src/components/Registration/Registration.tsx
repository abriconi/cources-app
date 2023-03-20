import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { userRegistration } from '../../api/userRegistration';
import { useNavigate } from 'react-router-dom';

import './registration.css';

function Registration() {
	type newUser = {
		name: string;
		password: string;
		email: string;
	};
	const navigate = useNavigate();
	async function handleClick(event: any): Promise<void> {
		event.preventDefault();
		const newUser: newUser = {
			name: event.target.name.value,
			password: event.target.password.value,
			email: event.target.email.value,
		};
		console.log('newUser', newUser);
		navigate('/login');
		await userRegistration(newUser);
	}
	return (
		<div className='registrationWrapper'>
			<h2 className='registrationTitle'>Registration</h2>
			<form className='registrationForm' onSubmit={handleClick}>
				<Input
					labelText='Name'
					type='text'
					name='name'
					placeholder='Enter name'
				/>
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
				<Button
					type='submit'
					buttonText='Registration'
					className='registrationBtn'
				/>
			</form>
			<p>
				If you have an account you can{' '}
				<Link to='/login' className='loginLink'>
					Login
				</Link>
			</p>
		</div>
	);
}
export default Registration;
