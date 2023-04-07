import React from 'react';
import CourseForm from '../../common/CourseForm/CourseForm';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { CoursePayload } from '../../interfaces';
import { createCourse } from '../../store/courses/actionCreators';
import './createCourse.css';

const CreateCourse: React.FC = () => {
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const navigate = useNavigate();
	const handleCourseSubmit = (course: CoursePayload) => {
		dispatch(createCourse(course));
		navigate('/courses');
	};

	return <CourseForm handleCourseSubmit={handleCourseSubmit} />;
};

export default CreateCourse;
