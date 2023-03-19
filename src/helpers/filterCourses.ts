import { Course } from '../interfaces/index';

function filterCourses(courses: Course[], filteredWord: string): Course[] {
	const result = courses.filter((course) => {
		return (
			course.title.toLowerCase().includes(filteredWord.toLowerCase()) ||
			course.id.toLowerCase().includes(filteredWord.toLowerCase())
		);
	});
	return result;
}
export default filterCourses;
