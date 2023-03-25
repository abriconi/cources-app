import { newUser } from '../interfaces/index';

export async function userRegistration(newUser: newUser): Promise<void> {
	const response = await fetch('http://localhost:4000/register', {
		method: 'POST',
		body: JSON.stringify(newUser),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();
	return result;
}
