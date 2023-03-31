import React, { useMemo } from 'react';
import AddAuthor from '../AddAuthor/AddAuthor';

import { Author } from '../../../../interfaces';

import './addedAuthorsToCourse.css';

interface Props {
	authors: Author[];
	authorsInCourse: string[];
	onDeleteAuthor: (authorID: string) => void;
}

const AddingAuthorsToCourse: React.FC<Props> = ({
	authors,
	authorsInCourse,
	onDeleteAuthor,
}) => {
	const isExistAuthorsList = useMemo(() => {
		return authorsInCourse && authorsInCourse.length > 0;
	}, [authorsInCourse]);

	const authorsToRender = useMemo(() => {
		return authors.filter((author) => authorsInCourse.includes(author.id));
	}, [authors, authorsInCourse]);

	return (
		<div className='addedAuthorsListWrapper'>
			<h3 className='addedAuthorsListTitle'>Course authors</h3>
			{!isExistAuthorsList ? (
				<p className='addedAuthorsListDescription'>Authors list is empty</p>
			) : (
				<ul className='authorlist'>
					{authorsToRender.map((author) => (
						<li key={author.name}>
							<AddAuthor
								authorsName={author.name}
								buttonText='Delete'
								onClick={() => onDeleteAuthor(author.id)}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
export default AddingAuthorsToCourse;
