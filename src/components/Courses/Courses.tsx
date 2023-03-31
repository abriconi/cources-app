import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';

import { mockedCoursesList, BUTTON_TEXT } from '../../constans';
import filterCourses from '../../helpers/filterCourses';
import { Course } from '../../interfaces/index';

import './courses.css';

const Courses = () => {
	const [filteredCourses, setFilteredCourses] =
		React.useState<Course[]>(mockedCoursesList);
	const navigate = useNavigate();

	function searchCoursesHandle(searchText: string): void {
		if (searchText === '') {
			setFilteredCourses(mockedCoursesList);
		} else {
			const filteredCoursesArr: Course[] = filterCourses(
				mockedCoursesList,
				searchText
			);
			setFilteredCourses(filteredCoursesArr);
		}
	}
	function onClickHandler() {
		navigate('/add');
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
			{filteredCourses.map((course) => (
				<CourseCard key={course.title} courseData={course}></CourseCard>
			))}
		</div>
	);
};
export default Courses;
