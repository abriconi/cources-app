import { CoursePayload } from '../interfaces';

export async function postCourse(course: CoursePayload): Promise<void> {
	const response = await fetch('http://localhost:4000/courses/add', {
		method: 'POST',
		body: JSON.stringify(course),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Failed adding the course');
	}

	const result = await response.json();
	return result;
}
