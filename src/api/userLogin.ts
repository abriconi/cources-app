import { User } from '../interfaces';
export async function userLogin(user: User): Promise<void> {
	const response = await fetch('http://localhost:4000/login', {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();

	localStorage.setItem('token', result.result);
	localStorage.setItem('user', JSON.stringify(result.user));
}
