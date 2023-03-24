import { Author } from '../interfaces/index';

export function filterAuthor(
	mockedAuthorsList: Author[],
	addedAuthors: string[]
): Author[] {
	return mockedAuthorsList.filter((author) => addedAuthors.includes(author.id));
}
