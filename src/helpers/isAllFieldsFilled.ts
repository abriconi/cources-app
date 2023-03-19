import { Course } from '../interfaces/index';

export function isAllFieldesFilled(course: Course) {
	if (
		Object.values(course).some(
			(value) => !value || (Array.isArray(value) && value.length === 0)
		)
	) {
		alert('Fill all the fieldes');
		throw new Error('not all fieldes were filled');
	}
}
