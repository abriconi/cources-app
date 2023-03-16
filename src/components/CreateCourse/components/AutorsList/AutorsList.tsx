import React from 'react';
import { Author } from '../../../../interfaces';
import AddAuthor from '../AddAuthor/AddAuthor';
import './authorList.css';

type Props = {
	authors: Author[]; // list of all authors (mocked + created)
	authorsToExclude: string[]; // authors that shouldn't be displayed in the list
	onAddAuthor: (authorId: string) => void; // triggered function when add author to new cource
};

function AutorsList(props: Props) {
	const authorsToRender = props.authors.filter(
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
