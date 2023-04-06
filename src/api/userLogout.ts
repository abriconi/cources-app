import { store } from '../store';

export async function userLogout(): Promise<void> {
	const token: string = store.getState()?.user?.token;

	const response = await fetch('http://localhost:4000/logout', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	});

	if (!response.ok) {
		throw new Error('Error Logout');
	}
}
