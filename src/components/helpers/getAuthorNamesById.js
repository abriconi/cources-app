export function getAuthorNamesById(authorsList, authorIds) {
	const filteredAuthors = authorsList.filter((author) =>
		authorIds.includes(author.id)
	);
	return filteredAuthors.map((author) => author.name).join(', ');
}
