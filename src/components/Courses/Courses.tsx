import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';

import { BUTTON_TEXT } from '../../constans';
import filterCourses from '../../helpers/filterCourses';
import { Course } from '../../interfaces/index';

import './courses.css';
import { getCoursesAll } from '../../store/selectors';

const Courses = () => {
	const coursesList = useSelector(getCoursesAll);
	const [filteredCourses, setFilteredCourses] =
		React.useState<any>(coursesList);
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if (searchText === '') {
			setFilteredCourses(coursesList);
		} else {
			const filteredCoursesArr: Course[] = filterCourses(
				coursesList,
				searchText
			);
			setFilteredCourses(filteredCoursesArr);
		}
	}, [coursesList, searchText]);

	function onClickHandler() {
		navigate('/add');
	}

	return (
		<div className='coursesWrapper'>
			<div className='searchBarWrapper'>
				<SearchBar onSearch={setSearchText}></SearchBar>
				<Button
					buttonText={BUTTON_TEXT.addNewCourse}
					type={'button'}
					onClick={onClickHandler}
				></Button>
			</div>
			{filteredCourses.map((course: Course) => (
				<CourseCard key={course.title} courseData={course}></CourseCard>
			))}
		</div>
	);
};
export default Courses;
