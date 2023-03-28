import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateTitle from './components/CreateTitle/CreateTitle';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AddDurationNewCourse from './components/AddDurationNewCourse/AddDurationNewCourse';
import AddedAuthorsToCourse from './components/AddedAuthorsToCourse/AddedAuthorsToCourse';
import AutorsList from './components/AutorsList/AutorsList';

import { generateUUID } from '../../helpers/generateUUID';
import { isAllFieldesFilled } from '../../helpers/isAllFieldsFilled';
import { Course, Author } from '../../interfaces/index';

import './createCourse.css';
import { mockedCoursesList } from '../../constans';
import { mockedAuthorsList } from '../../constans';

const CreateCourse = () => {
	const navigate = useNavigate();
	const [authors, setAuthors] = useState<string[]>([]);
	const [titleValue, setTitleValue] = useState('');
	const [descriptionValue, setDescriptionValue] = useState('');
	const [authorsList, setAuthorsList] = useState<Author[]>(mockedAuthorsList);

	function submitHandler(e: React.SyntheticEvent) {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			courseTitle: { value: string };
			courseDescription: { value: string };
			duration: { value: string };
		};

		const newCourse: Course = {
			id: generateUUID(),
			title: titleValue,
			description: descriptionValue,
			creationDate: new Date().toLocaleDateString('en-GB'),
			duration: Number(target.duration.value), // TODO duration without target.value
			authors: authors,
		};

		if (!isAllFieldesFilled(newCourse)) {
			alert('Fill all the fieldes');
			return;
		} else {
			mockedCoursesList.push(newCourse);
			console.log('newCourse', newCourse);
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
					<CreateAuthor
						authorsList={authorsList}
						setAuthorsList={setAuthorsList}
					/>
					<AddDurationNewCourse />
				</div>
				<div className='columnLayout'>
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
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
