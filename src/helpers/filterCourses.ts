import { Course } from '../interfaces/index';

function filterCourses(courses: Course[], filteredWord: string): Course[] {
	const filteredWordLowerCase = filteredWord.toLowerCase();

	const result = courses.filter((course) => {
		return (
			course.title.toLowerCase().includes(filteredWordLowerCase) ||
			course.id.toLowerCase() === filteredWordLowerCase
		);
	});
	return result;
}
export default filterCourses;
