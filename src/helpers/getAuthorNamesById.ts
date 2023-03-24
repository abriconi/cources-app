import { Author } from '../interfaces/index';

export function getAuthorNamesById(
	authorsList: Author[],
	authorIds: string[]
): string {
	return authorsList
		.filter((author) => authorIds.includes(author.id))
		.map((author) => author.name)
		.join(', ');
}
