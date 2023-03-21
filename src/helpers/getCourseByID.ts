import { Course } from '../interfaces';

export function getCoursebyIDOnMockedData(
	id: string,
	courses: Course[]
): Course | undefined {
	return courses.find((course) => course.id === id);
}
