import CreateTitle from './components/CreateTitle/CreateTitle';
import CreateCourseBody from './components/CreateCourseBody/CreateCourseBody';
import Button from '../common/Button/Button';
import { generateUUID } from '../helpers/generateUUID';
import { useState } from 'react';

import './createCourse.css';

function CreateCourse(props) {
	const [addedAuthorsList, setAddedAuthorsList] = useState([]);
	function submitHandler(e) {
		e.preventDefault();
		const newCourse = {
			id: generateUUID(),
			title: e.target.courseTitle.value,
			description: e.target.courseDescription.value,
			duration: Number(e.target.duration.value),
			authors: addedAuthorsList,
		};
		console.log('newCourse', newCourse);
		setAddedAuthorsList([]);
		e.target.courseTitle.value = '';
		e.target.courseDescription.value = '';
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
				authorsList={props.authorsList}
				setAuthorsList={props.setAuthorsList}
				addedAuthorsList={addedAuthorsList}
				setAddedAuthorsList={setAddedAuthorsList}
			/>
		</form>
	);
}

export default CreateCourse;
