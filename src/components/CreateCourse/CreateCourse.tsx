import React from 'react';
import CreateTitle from './components/CreateTitle/CreateTitle';
import CreateCourseBody from './components/CreateCourseBody/CreateCourseBody';
import Button from '../common/Button/Button';
import { generateUUID } from '../helpers/generateUUID';
import { useState } from 'react';
import { BUTTON_TEXT } from '../constans';

import './createCourse.css';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AddDurationNewCourse from './components/AddDurationNewCourse/AddDurationNewCourse';
import AutorsList from './components/AutorsList/AutorsList';
import AddedAuthorsToCourse from './components/AddedAuthorsToCourse/AddedAuthorsToCourse';
import { Course, Author } from '../../interfaces/index';

type Props = {
	courses: Course[];
	setCourses: (courses: Course[]) => void;
	authorsList: Author[];
	setAuthorsList: (authors: Author[]) => void;
};

function CreateCourse(props: Props) {
	const [authors, setAuthors] = useState<string[]>([]);

	function submitHandler(e: any) {
		e.preventDefault();
		const newCourse: Course = {
			id: generateUUID(),
			title: e.target.courseTitle.value,
			description: e.target.courseDescription.value,
			creationDate: new Date().toLocaleDateString('en-GB'),
			duration: Number(e.target.duration.value),
			authors: authors,
		};
		e.target.reset();
		props.setCourses([...props.courses, newCourse]);
	}

	function addAuthorToCourse(authorId: string): void {
		setAuthors([...authors, authorId]);
	}

	function deleteAuthorFromCourse(authorId: string): void {
		const authorsInCourse: string[] = authors.filter(
			(author: string) => author !== authorId
		);
		setAuthors(authorsInCourse);
	}

	return (
		<form className='createCourseForm' onSubmit={submitHandler}>
			<CreateTitle />
			<Button
				buttonText={BUTTON_TEXT.createCourse}
				type='submit'
				position='positionAbsolute'
			/>
			<CreateCourseBody
				top={
					<>
						<CreateAuthor
							authorsList={props.authorsList} // primary list of authors
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
