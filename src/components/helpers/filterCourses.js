function filterCourses(courses, filteredWord) {
	const result = courses.filter((course) => {
		return (
			course.title.toLowerCase().includes(filteredWord.toLowerCase()) ||
			course.id.toLowerCase().includes(filteredWord.toLowerCase())
		);
	});
	return result;
}
export default filterCourses;
