export function filterAuthor(mockedAuthorsList, addedAuthors) {
	return mockedAuthorsList.filter((author) => addedAuthors.includes(author.id));
}
