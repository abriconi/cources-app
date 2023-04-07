import { AuthorPayload } from '../interfaces';

export async function postAuthor(author: AuthorPayload): Promise<void> {
	const response = await fetch('http://localhost:4000/authors/add', {
		method: 'POST',
		body: JSON.stringify(author),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Failed adding the course');
	}

	const result = await response.json();
	return result;
}
