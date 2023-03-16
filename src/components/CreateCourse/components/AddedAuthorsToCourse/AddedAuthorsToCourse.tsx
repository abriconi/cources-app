import React from 'react';
import { Author } from '../../../../interfaces';
import AddAuthor from '../AddAuthor/AddAuthor';
import './addedAuthorsToCourse.css';

type Props = {
	authors: Author[]; //масив всіх авторів
	authorsInCourse: string[]; // масив ІД авторів, які додані до курсу
	onDeleteAuthor: (authorID: string) => void;
};

function AddingAuthorsToCourse(props: Props) {
	const isExistAuthorsList =
		props.authorsInCourse && props.authorsInCourse.length > 0;

	const authorsToRender = props.authors.filter((author) =>
		props.authorsInCourse.includes(author.id)
	);
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
								onClick={() => props.onDeleteAuthor(author.id)}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
export default AddingAuthorsToCourse;
