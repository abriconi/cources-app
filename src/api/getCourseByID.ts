import { Course } from '../interfaces/index';

export async function getCourseByID(id: string | undefined): Promise<Course> {
	const response = await fetch(`http://localhost:4000/courses/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();

	if (!result.successful) {
		throw new Error(result.result);
	}

	return result.result;
}
