import { Author } from '../interfaces/index';

export async function getAllAuthors(): Promise<Author[]> {
	const response = await fetch(`http://localhost:4000/authors/all`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();

	if (!result.successful) {
		throw new Error(result.result);
	}
	return result.result;
}
