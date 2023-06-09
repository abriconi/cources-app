import React from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../../store/courses/actionCreators';

import CourseForm from '../../common/CourseForm/CourseForm';
import { CoursePayload } from '../../interfaces';
import { BUTTON_TEXT } from '../../constans';

const CreateCourse: React.FC = () => {
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const navigate = useNavigate();
	const handleCourseSubmit = (course: CoursePayload) => {
		dispatch(createCourse(course));
		navigate('/courses');
	};

	return (
		<div className='coursesWrapper'>
			<CourseForm
				handleCourseSubmit={handleCourseSubmit}
				mainBtnText={BUTTON_TEXT.addNewCourse}
			/>
		</div>
	);
};

export default CreateCourse;
