import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userRegistration } from '../../api/userRegistration';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { BUTTON_TEXT, PLACEHOLDER_TEXT } from '../../constans';
import { newUser } from '../../interfaces';

import './registration.css';

const Registration: React.FC = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');

	function handleOnChangeNameField(value: string): void {
		setUserName(value);
	}
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

		const newUser: newUser = {
			name: userName,
			password: userPassword,
			email: userEmail,
		};
		navigate('/login');
		await userRegistration(newUser);
	}
	return (
		<div className='registrationWrapper'>
			<h1 className='registrationHeader'>Registration</h1>
			<form className='registrationForm' onSubmit={handleClick}>
				<Input
					labelText='Name'
					type='text'
					value={userName}
					placeholder={PLACEHOLDER_TEXT.enterName}
					onChange={handleOnChangeNameField}
				></Input>
				<Input
					labelText='Email'
					type='email'
					value={userEmail}
					placeholder={PLACEHOLDER_TEXT.enterEmail}
					onChange={handleOnChangeEmailField}
				></Input>
				<Input
					labelText='Password'
					type='password'
					value={userPassword}
					placeholder={PLACEHOLDER_TEXT.enterPassword}
					onChange={handleOnChangePasswordField}
					minLength={6}
				></Input>
				<Button
					type='submit'
					buttonText={BUTTON_TEXT.registration}
					className='registrationBtn'
				></Button>
			</form>
			<p>
				If you have an account you can{' '}
				<Link to='/login' className='loginLink'>
					Login
				</Link>
			</p>
		</div>
	);
};

export default Registration;
