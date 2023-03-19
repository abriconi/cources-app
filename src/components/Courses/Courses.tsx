import React, { useState } from 'react';
import SearchBar from './components/SearchBar/Seacrbar';
import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import CreateCourse from '../CreateCourse/CreateCourse';

import {
	mockedCoursesList,
	BUTTON_TEXT,
	mockedAuthorsList,
} from '../../constans';
import filterCourses from '../../helpers/filterCourses';
import { Course, Author } from '../../interfaces/index';

import './courses.css';

function Courses() {
	const [renderedComponent, setRenderedComponent] = useState(
		'courseCardComponent'
	);
	const [courses, setCourses] = React.useState<Course[]>(mockedCoursesList);
	const [authorsList, setAuthorsList] =
		React.useState<Author[]>(mockedAuthorsList);

	function searchCoursesHandle(searchText: string): void {
		if (searchText === '') {
			setCourses(mockedCoursesList);
		} else {
			const filteredCourses: Course[] = filterCourses(courses, searchText);
			setCourses(filteredCourses);
		}
	}
	function onClickHandler() {
		setRenderedComponent('createCourseComponent');
	}

	return (
		<div className='coursesWrapper'>
			<div className='searchBarWrapper'>
				<SearchBar onSearch={searchCoursesHandle}></SearchBar>
				<Button
					buttonText={BUTTON_TEXT.addNewCourse}
					type={'button'}
					onClick={onClickHandler}
				></Button>
			</div>
			{renderedComponent === 'courseCardComponent' &&
				courses.map((course) => (
					<CourseCard key={course.title} courseData={course}></CourseCard>
				))}
			{renderedComponent === 'createCourseComponent' && (
				<CreateCourse
					authorsList={authorsList}
					setAuthorsList={setAuthorsList}
					courses={courses}
					setCourses={setCourses}
					setRenderedComponent={setRenderedComponent}
					renderedComponent={renderedComponent}
				></CreateCourse>
			)}
		</div>
	);
}
export default Courses;
