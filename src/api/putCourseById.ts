import { CoursePayload } from '../interfaces';

export async function putCourseToServer(
	id: string,
	course: CoursePayload
): Promise<void> {
	const response = await fetch(`http://localhost:4000/courses/${id}`, {
		method: 'PUT',
		body: JSON.stringify(course),
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
