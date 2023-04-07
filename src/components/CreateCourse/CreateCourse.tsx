import React from 'react';
import CourseForm from '../../common/CourseForm/CourseForm';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { CoursePayload } from '../../interfaces';
import { createCourse } from '../../store/courses/actionCreators';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/selectors';
import './createCourse.css';

const CreateCourse: React.FC = () => {
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const navigate = useNavigate();
	const userRole: any = useSelector(getUser).role;
	const handleCourseSubmit = (course: CoursePayload) => {
		dispatch(createCourse(course));
		navigate('/courses');
	};

	return userRole === 'admin' ? (
		<CourseForm handleCourseSubmit={handleCourseSubmit} />
	) : (
		<p className='messageForUser'>You must be an admin to create a course.</p>
	);
};

export default CreateCourse;
