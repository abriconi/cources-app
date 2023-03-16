import React from 'react';
import SearchBar from './components/SearchBar/Seacrbar';
import Button from '../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import CreateCourse from '../CreateCourse/CreateCourse';
import { mockedCoursesList, BUTTON_TEXT, mockedAuthorsList } from '../constans';
import { Course, Author } from '../../interfaces/index';

import './courses.css';
import filterCourses from '../helpers/filterCourses';

function Courses() {
	const [courses, setCourses] = React.useState<Course[]>(mockedCoursesList);
	const [authorsList, setAuthorsList] =
		React.useState<Author[]>(mockedAuthorsList);

	function searchCoursesHandle(searchText: string): void {
		const filteredCourses: Course[] = filterCourses(
			mockedCoursesList,
			searchText
		);
		setCourses(filteredCourses);
	}

	return (
		<div className='coursesWrapper'>
			<div className='searchBarWrapper'>
				<SearchBar onSearch={searchCoursesHandle}></SearchBar>
				<Button buttonText={BUTTON_TEXT.addNewCourse} type={'button'}></Button>
			</div>
			{courses.map((course) => (
				<CourseCard key={course.title} courseData={course}></CourseCard>
			))}
			<CreateCourse
				authorsList={authorsList}
				setAuthorsList={setAuthorsList}
				courses={courses}
				setCourses={setCourses}
			></CreateCourse>
		</div>
	);
}
export default Courses;
