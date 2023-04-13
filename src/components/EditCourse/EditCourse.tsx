import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { editCourse } from '../../store/courses/actionCreators';
import { RootState } from '../../store';

import CourseForm from '../../common/CourseForm/CourseForm';

import { Course, CoursePayload } from '../../interfaces';
import coursesApi from '../../api/Courses';

const EditCourse: React.FC = () => {
	const routeParams = useParams();
	const navigate = useNavigate();
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const [course, setCourse] = useState<Course | null>(null);

	useEffect(() => {
		if (!routeParams.courseId) {
			return;
		}

		const fetchCourse = async () => {
			const courseData = await coursesApi.getCourse(
				routeParams.courseId as string
			);
			setCourse(courseData);
		};

		fetchCourse();
	}, [routeParams.courseId]);

	const handleCourseSubmit = (course: CoursePayload): void => {
		if (!routeParams.courseId) {
			throw new Error('Missing course ID.');
		}

		dispatch(editCourse(routeParams.courseId, course));
		navigate('/courses');
	};

	if (!course) {
		return <div>Loading...</div>;
	}

	return (
		<div className='coursesWrapper'>
			<CourseForm
				course={course}
				handleCourseSubmit={handleCourseSubmit}
				mainBtnText='UpdateCourse'
			/>
		</div>
	);
};

export default EditCourse;
