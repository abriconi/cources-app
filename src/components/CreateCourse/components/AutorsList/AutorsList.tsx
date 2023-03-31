import React, { useMemo } from 'react';
import AddAuthor from '../AddAuthor/AddAuthor';

import { Author } from '../../../../interfaces';

import './authorList.css';

interface Props {
	authors: Author[];
	authorsToExclude: string[];
	onAddAuthor: (authorId: string) => void;
}

const AutorsList: React.FC<Props> = ({
	authors,
	authorsToExclude,
	onAddAuthor,
}) => {
	const authorsToRender = useMemo(() => {
		return authors.filter((author) => !authorsToExclude.includes(author.id));
	}, [authors, authorsToExclude]);

	return (
		<div className='authorListWrapper'>
			<h3>Authors</h3>
			<ul className='authorlist'>
				{authorsToRender.map((author) => (
					<AddAuthor
						key={author.name}
						authorsName={author.name}
						buttonText='Add author'
						onClick={() => onAddAuthor(author.id)}
					/>
				))}
			</ul>
		</div>
	);
};

export default AutorsList;
