import React, { useMemo } from 'react';
import AddAuthor from '../AddAuthor/AddAuthor';
import { useSelector } from 'react-redux';
import { getAuthorsAll } from '../../../../store/selectors';

import { Author } from '../../../../interfaces';

import './addedAuthorsToCourse.css';

interface Props {
	authorsInCourse: string[];
	onDeleteAuthor: (authorID: string) => void;
}

const AddingAuthorsToCourse: React.FC<Props> = ({
	authorsInCourse,
	onDeleteAuthor,
}) => {
	const authors: Author[] = useSelector(getAuthorsAll);
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
