import { User, loginResponce } from '../interfaces';

export async function userLogin(user: User): Promise<loginResponce> {
	const response = await fetch('http://localhost:4000/login', {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Incorrect email or password.');
	}

	const result = await response.json();
	return result;
}
