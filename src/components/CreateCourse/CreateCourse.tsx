import React, { useState } from 'react';
import CreateTitle from './components/CreateTitle/CreateTitle';
import CreateCourseBody from './components/CreateCourseBody/CreateCourseBody';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AddDurationNewCourse from './components/AddDurationNewCourse/AddDurationNewCourse';
import AddedAuthorsToCourse from './components/AddedAuthorsToCourse/AddedAuthorsToCourse';
import AutorsList from './components/AutorsList/AutorsList';

import { generateUUID } from '../../helpers/generateUUID';
import { isAllFieldesFilled } from '../../helpers/isAllFieldsFilled';
import { Course } from '../../interfaces/index';

import './createCourse.css';

// type Props = {
// 	courses: Course[];
// 	setCourses: (courses: Course[]) => void;
// 	authorsList: Author[];
// 	setAuthorsList: (authors: Author[]) => void;
// 	setRenderedComponent: (component: string) => void;
// 	renderedComponent: string;
// };

function CreateCourse() {
	const [authors, setAuthors] = useState<string[]>([]);

	function submitHandler(e: React.SyntheticEvent) {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			courseTitle: { value: string };
			courseDescription: { value: string };
			duration: { value: string };
		};

		const newCourse: Course = {
			id: generateUUID(),
			title: target.courseTitle.value,
			description: target.courseDescription.value,
			creationDate: new Date().toLocaleDateString('en-GB'),
			duration: Number(target.duration.value),
			authors: authors,
		};

		isAllFieldesFilled(newCourse);
		console.log('course created'); // TODO add function to create course and send to server
		// props.setCourses([...props.courses, newCourse]);
		// props.setRenderedComponent('courseCardComponent');
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
			<CreateCourseBody
				top={
					<>
						<CreateAuthor />
						<AddDurationNewCourse />
					</>
				}
				bottom={
					<>
						<AutorsList
							// authors={props.authorsList}
							onAddAuthor={addAuthorToCourse}
							authorsToExclude={authors}
						/>
						<AddedAuthorsToCourse
							// authors={props.authorsList} //масив всіх авторів
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
