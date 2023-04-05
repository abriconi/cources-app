import { Course } from '../interfaces/index';

export async function deleteCourseByID(
	id: string | undefined
): Promise<Course> {
	const response = await fetch(`http://localhost:4000/courses/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error(
			`Failed to delete course with ID ${id}: ${response.statusText}`
		);
	}

	const result = await response.json();

	if (!result.successful) {
		throw new Error(result.result);
	}

	return result.result;
}
