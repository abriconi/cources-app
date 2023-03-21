import { Author } from '../interfaces/index';

export function getAuthorNamesById(
	authorsList: Author[],
	authorIds: string[] | undefined
): string {
	if (!authorIds) {
		return '';
	}
	const filteredAuthors = authorsList.filter((author) =>
		authorIds.includes(author.id)
	);
	return filteredAuthors.map((author) => author.name).join(', ');
}
