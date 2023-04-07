import React, { useEffect, useState } from 'react';
import { getCourseByID } from '../../api/getCourseByID';
import CourseForm from '../../common/CourseForm/CourseForm';
import { useParams } from 'react-router-dom';
import { Course, CoursePayload } from '../../interfaces';
import { editCourse } from '../../store/courses/actionCreators';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';

const EditCourse: React.FC = () => {
	const routeParams = useParams();
	const navigate = useNavigate();
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const [course, setCourse] = useState<Course | null>(null);

	useEffect(() => {
		const fetchCourse = async () => {
			const courseData = await getCourseByID(routeParams.courseId);
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

	return <CourseForm course={course} handleCourseSubmit={handleCourseSubmit} />;
};

export default EditCourse;
