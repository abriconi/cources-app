import React, { useState } from 'react';
import SearchBar from './components/SearchBar/Seacrbar';
import Button from '../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import CreateCourse from '../CreateCourse/CreateCourse';
import { mockedCoursesList } from '../constans';
import { mockedAuthorsList } from '../constans';

import './courses.css';
import filterCourses from '../helpers/filterCourses';

function Courses() {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);

	function searchCoursesHandle(searchText) {
		const filteredCourses = filterCourses(mockedCoursesList, searchText);
		setCourses(filteredCourses);
	}

	return (
		<div className='coursesWrapper'>
			<div className='searchBarWrapper'>
				<SearchBar onSearch={searchCoursesHandle}></SearchBar>
				<Button buttonText='Add new course'></Button>
			</div>
			{courses.map((course) => (
				<CourseCard key={course.title} courseData={course}></CourseCard>
			))}
			<CreateCourse
				authorsList={authorsList}
				setAuthorsList={setAuthorsList} // primary list of authors
			></CreateCourse>
		</div>
	);
}
export default Courses;
