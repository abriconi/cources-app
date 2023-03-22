import React, { useState } from 'react';
import AddAuthor from '../AddAuthor/AddAuthor';

import { Author } from '../../../../interfaces';
import { getAllAuthors } from '../../../../api/getAllAuthors';

import './authorList.css';

type Props = {
	// authors: Author[]; // list of all authors (mocked + created)
	authorsToExclude: string[]; // authors that shouldn't be displayed in the list
	onAddAuthor: (authorId: string) => void; // triggered function when add author to new cource
};

function AutorsList(props: Props) {
	const [authors, setAuthors] = useState<Author[]>([]);
	async function getAuthorsFromServer() {
		const authors = await getAllAuthors();
		setAuthors(authors);
	}
	getAuthorsFromServer();
	const authorsToRender = authors.filter(
		(author) => !props.authorsToExclude.includes(author.id)
	);

	return (
		<div className='authorListWrapper'>
			<h3>Authors</h3>
			<ul className='authorlist'>
				{authorsToRender.map((author) => (
					<AddAuthor
						key={author.name}
						authorsName={author.name}
						buttonText='Add author'
						onClick={() => props.onAddAuthor(author.id)}
					/>
				))}
			</ul>
		</div>
	);
}

export default AutorsList;
