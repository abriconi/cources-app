import React, { useState } from 'react';
import CreateTitle from './components/CreateTitle/CreateTitle';
import CreateCourseBody from './components/CreateCourseBody/CreateCourseBody';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AddDurationNewCourse from './components/AddDurationNewCourse/AddDurationNewCourse';
import AddedAuthorsToCourse from './components/AddedAuthorsToCourse/AddedAuthorsToCourse';
import AutorsList from './components/AutorsList/AutorsList';

import { generateUUID } from '../../helpers/generateUUID';
import { isAllFieldesFilled } from '../../helpers/isAllFieldsFilled';
import { Course, Author } from '../../interfaces/index';

import './createCourse.css';

interface Props {
	courses: Course[];
	setCourses: (courses: Course[]) => void;
	authorsList: Author[];
	setAuthorsList: (authors: Author[]) => void;
	setShowCreateCourse: (arg: boolean) => void;
}

const CreateCourse = ({
	courses,
	setCourses,
	authorsList,
	setAuthorsList,
	setShowCreateCourse,
}: Props) => {
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
		setCourses([...courses, newCourse]);
		setShowCreateCourse(false);
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
						<CreateAuthor
							authorsList={authorsList} // primary list of authors
							setAuthorsList={setAuthorsList}
						/>
						<AddDurationNewCourse />
					</>
				}
				bottom={
					<>
						<AutorsList
							authors={authorsList}
							onAddAuthor={addAuthorToCourse}
							authorsToExclude={authors}
						/>
						<AddedAuthorsToCourse
							authors={authorsList}
							authorsInCourse={authors}
							onDeleteAuthor={deleteAuthorFromCourse}
						/>
					</>
				}
			/>
		</form>
	);
};

export default CreateCourse;
