import React from 'react';
import CourseForm from '../../common/CourseForm/CourseForm';
import { Course } from '../../interfaces';

const courseTest: Course = {
	id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd046464',
	title: 'Angular-test',
	description: 'description',
	creationDate: '10/11/2020',
	duration: 210,
	authors: [
		'df32994e-b23d-497c-9e4d-84e4dc02882f',
		'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
	],
};

const EditCourse: React.FC = () => {
	return <CourseForm course={courseTest} />;
};

export default EditCourse;
