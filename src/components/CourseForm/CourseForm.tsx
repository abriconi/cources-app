import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store';
import { createCourse } from '../../store/courses/actionCreators';

import { useNavigate } from 'react-router-dom';
import CreateTitle from './components/CreateTitle/CreateTitle';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AddDurationNewCourse from './components/AddDurationNewCourse/AddDurationNewCourse';
import AddedAuthorsToCourse from './components/AddedAuthorsToCourse/AddedAuthorsToCourse';
import AutorsList from './components/AutorsList/AutorsList';

import { generateUUID } from '../../helpers/generateUUID';
import { isAllFieldesFilled } from '../../helpers/isAllFieldsFilled';
import { Course } from '../../interfaces/index';

import './createCourse.css';

const CreateCourse = () => {
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const navigate = useNavigate();
	const [authors, setAuthors] = useState<string[]>([]);
	const [titleValue, setTitleValue] = useState('');
	const [descriptionValue, setDescriptionValue] = useState('');
	const [duration, setDuration] = useState('');

	function submitHandler(e: React.SyntheticEvent) {
		e.preventDefault();

		const newCourse: Course = {
			id: generateUUID(),
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
			dispatch(createCourse(newCourse));
			navigate('/courses');
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
				setTitleValue={setTitleValue}
				descriptionValue={descriptionValue}
				setDescriptionValue={setDescriptionValue}
			/>

			<div className='createCourseBody'>
				<div className='columnLayout'>
					<CreateAuthor />
					<AddDurationNewCourse duration={duration} setDuration={setDuration} />
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

export default CreateCourse;