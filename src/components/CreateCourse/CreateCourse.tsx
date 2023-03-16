import React from 'react';
import CreateTitle from './components/CreateTitle/CreateTitle';
import CreateCourseBody from './components/CreateCourseBody/CreateCourseBody';
import Button from '../common/Button/Button';
import { generateUUID } from '../helpers/generateUUID';
import { useState } from 'react';

import './createCourse.css';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AddDurationNewCourse from './components/AddDurationNewCourse/AddDurationNewCourse';
import AutorsList from './components/AutorsList/AutorsList';
import AddedAuthorsToCourse from './components/AddedAuthorsToCourse/AddedAuthorsToCourse';

function CreateCourse(props: any) {
	const [authors, setAuthors] = useState<string[]>([]);

	function submitHandler(e: any) {
		e.preventDefault();
		const newCourse = {
			id: generateUUID(),
			title: e.target.courseTitle.value,
			description: e.target.courseDescription.value,
			duration: Number(e.target.duration.value),
			authors,
		};
		console.log('newCourse', newCourse);
		e.target.courseTitle.value = '';
		e.target.courseDescription.value = '';
	}

	function addAuthorToCourse(authorId: string) {
		setAuthors([...authors, authorId]);
	}

	function deleteAuthorFromCourse(authorId: string): void {
		const authorsInCourse = authors.filter((author) => author !== authorId);
		setAuthors(authorsInCourse);
	}

	return (
		<form className='createCourseForm' onSubmit={submitHandler}>
			<CreateTitle />
			<Button
				buttonText='Create course'
				type='submit'
				position='positionAbsolute'
			/>
			<CreateCourseBody
				top={
					<>
						<CreateAuthor
							authorsList={props.authorsList}
							setAuthorsList={props.setAuthorsList}
						/>
						<AddDurationNewCourse />
					</>
				}
				bottom={
					<>
						<AutorsList
							authors={props.authorsList}
							onAddAuthor={addAuthorToCourse}
							authorsToExclude={authors}
						/>
						<AddedAuthorsToCourse
							authors={props.authorsList} //масив всіх авторів
							authorsInCourse={authors} // масив ІД авторів, які додані до курсу
							onDeleteAuthor={deleteAuthorFromCourse}
						/>
					</>
				}
			/>
		</form>
	);
}

export default CreateCourse;
