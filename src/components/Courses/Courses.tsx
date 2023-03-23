import React, { useState, useEffect } from 'react';
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
	const [showCreateCourse, setShowCreateCourse] = useState<boolean>(false);
	const [courses, setCourses] = React.useState<Course[]>(mockedCoursesList);
	const [filteredCourses, setFilteredCourses] =
		React.useState<Course[]>(courses);
	const [authorsList, setAuthorsList] =
		React.useState<Author[]>(mockedAuthorsList);

	useEffect(() => setFilteredCourses(courses), [courses]);

	function searchCoursesHandle(searchText: string): void {
		if (searchText === '') {
			setFilteredCourses(courses);
		} else {
			const filteredCoursesArr: Course[] = filterCourses(courses, searchText);
			setFilteredCourses(filteredCoursesArr);
		}
	}
	function onClickHandler() {
		setShowCreateCourse(true);
	}

	return (
		<div className='coursesWrapper'>
			{!showCreateCourse ? (
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
			) : (
				<CreateCourse
					authorsList={authorsList}
					setAuthorsList={setAuthorsList}
					courses={courses}
					setCourses={setCourses}
					setShowCreateCourse={setShowCreateCourse}
				></CreateCourse>
			)}
		</div>
	);
};
export default Courses;
