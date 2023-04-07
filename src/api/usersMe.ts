import { usersMeResponce } from '../interfaces';
import { store } from '../store';

export async function usersMefromServer(): Promise<usersMeResponce> {
	const token: string = store.getState()?.user?.token;
	const response = await fetch('http://localhost:4000/users/me', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	});

	if (!response.ok) {
		throw new Error('Error');
	}

	const result = await response.json();
	return result;
}
