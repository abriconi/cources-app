import React, { useMemo } from 'react';
import AddAuthor from '../AddAuthor/AddAuthor';
import { useSelector } from 'react-redux';
import { getAuthorsAll } from '../../../../store/selectors';

import { Author } from '../../../../interfaces';

import './authorList.css';

interface Props {
	authorsToExclude: string[];
	onAddAuthor: (authorId: string) => void;
}

const AutorsList: React.FC<Props> = ({ authorsToExclude, onAddAuthor }) => {
	const authors: Author[] = useSelector(getAuthorsAll);
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
