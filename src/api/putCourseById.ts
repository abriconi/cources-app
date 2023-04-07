import { CoursePayload } from '../interfaces';

export async function putCourseToServer(
	id: string,
	course: CoursePayload
): Promise<void> {
	const updatedCourse = {
		title: course.title,
		description: course.description,
		creationDate: course.description,
		duration: course.duration,
		authors: course.authors,
	};

	const response = await fetch(`http://localhost:4000/courses/${id}`, {
		method: 'PUT',
		body: JSON.stringify(updatedCourse),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Failed update course');
	}

	const result = await response.json();
	return result;
}
