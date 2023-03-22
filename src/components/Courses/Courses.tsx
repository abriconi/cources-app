import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
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

const Courses = () => {
	const [renderedComponent, setRenderedComponent] = useState(
		'courseCardComponent'
	);
	const [courses, setCourses] = React.useState<Course[]>(mockedCoursesList);
	const [filteredCourses, setFilteredCourses] =
		React.useState<Course[]>(courses);
	const [authorsList, setAuthorsList] =
		React.useState<Author[]>(mockedAuthorsList);

	function searchCoursesHandle(searchText: string): void {
		if (searchText === '') {
			setFilteredCourses(courses);
		} else {
			const filteredCoursesArr: Course[] = filterCourses(courses, searchText);
			setFilteredCourses(filteredCoursesArr);
		}
	}
	function onClickHandler() {
		setRenderedComponent('createCourseComponent');
	}

	return (
		<div className='coursesWrapper'>
			{renderedComponent === 'courseCardComponent' && (
				<>
					<div className='searchBarWrapper'>
						<SearchBar onSearch={searchCoursesHandle}></SearchBar>
						<Button
							buttonText={BUTTON_TEXT.addNewCourse}
							type={'button'}
							onClick={onClickHandler}
						></Button>
					</div>
					{filteredCourses.map((course) => (
						<CourseCard key={course.title} courseData={course}></CourseCard>
					))}
				</>
			)}

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
};
export default Courses;
