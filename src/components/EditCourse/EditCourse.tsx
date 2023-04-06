import React, { useEffect, useState } from 'react';
import { getCourseByID } from '../../api/getCourseByID';
import CourseForm from '../../common/CourseForm/CourseForm';
import { useParams } from 'react-router-dom';
import { Course } from '../../interfaces';

const EditCourse: React.FC = () => {
	const routeParams = useParams();
	const [course, setCourse] = useState<Course | null>(null);

	useEffect(() => {
		const fetchCourse = async () => {
			const courseData = await getCourseByID(routeParams.courseId);
			setCourse(courseData);
		};

		fetchCourse();
	}, [routeParams.courseId]);

	const handleCourseSubmit = (course: Course): void => {
		console.log(course);
	};

	if (!course) {
		return <div>Loading...</div>;
	}
	console.log(course);

	return (
		<CourseForm
			course={course}
			handleCourseSubmit={() => handleCourseSubmit(course)}
		/>
	);
};

export default EditCourse;
