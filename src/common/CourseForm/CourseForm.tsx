import React, { useState } from 'react';

import CreateTitle from './components/CreateTitle/CreateTitle';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AddDurationNewCourse from './components/AddDurationNewCourse/AddDurationNewCourse';
import AddedAuthorsToCourse from './components/AddedAuthorsToCourse/AddedAuthorsToCourse';
import AutorsList from './components/AutorsList/AutorsList';

import { isAllFieldesFilled } from '../../helpers/isAllFieldsFilled';
import { pipeDuration } from '../../helpers/pipeDuration';
import { Course, CoursePayload } from '../../interfaces/index';

import './createCourse.css';

interface Props {
	course?: Course;
	handleCourseSubmit: (course: CoursePayload) => void;
	mainBtnText: string;
}

const CourseForm: React.FC<Props> = ({
	course,
	handleCourseSubmit,
	mainBtnText,
}) => {
	const [authors, setAuthors] = useState<string[]>(course?.authors || []);
	const [titleValue, setTitleValue] = useState(course?.title || '');
	const [descriptionValue, setDescriptionValue] = useState(
		course?.description || ''
	);
	const [duration, setDuration] = useState(course?.duration?.toString() || '');
	const [formattedDuration, setFormattedDuration] = useState(
		pipeDuration(Number(duration))
	);

	function submitHandler(e: React.SyntheticEvent) {
		e.preventDefault();

		const newCourse: CoursePayload = {
			title: titleValue,
			description: descriptionValue,
			creationDate: new Date().toLocaleDateString('en-GB'),
			duration: Number(duration),
			authors: authors,
		};

		if (!isAllFieldesFilled(newCourse)) {
			alert('Fill all the fieldes');
			return;
		} else {
			handleCourseSubmit(newCourse);
		}
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
			<CreateTitle
				titleValue={titleValue}
				mainBtnText={mainBtnText}
				setTitleValue={setTitleValue}
				descriptionValue={descriptionValue}
				setDescriptionValue={setDescriptionValue}
			/>

			<div className='createCourseBody'>
				<div className='columnLayout'>
					<CreateAuthor />
					<AddDurationNewCourse
						duration={duration}
						setDuration={setDuration}
						formattedDuration={formattedDuration}
						setFormattedDuration={setFormattedDuration}
					/>
				</div>
				<div className='columnLayout'>
					<AutorsList
						onAddAuthor={addAuthorToCourse}
						authorsToExclude={authors}
					/>
					<AddedAuthorsToCourse
						authorsInCourse={authors}
						onDeleteAuthor={deleteAuthorFromCourse}
					/>
				</div>
			</div>
		</form>
	);
};

export default CourseForm;
