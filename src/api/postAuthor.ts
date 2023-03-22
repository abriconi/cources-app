import { AuthorSever } from '../interfaces';

export async function postAuthor(
	author: AuthorSever,
	token: string
): Promise<void> {
	const response = await fetch('http://localhost:4000/authors/add', {
		method: 'POST',
		body: JSON.stringify(author),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	const result = await response.json();
	if (!result.successful) {
		throw new Error(result.result);
	}
	return result.result;
}
