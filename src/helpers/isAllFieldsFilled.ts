import { Course } from '../interfaces/index';

export function isAllFieldesFilled(course: Course): boolean {
	const isFieldEmpty = Object.values(course).some(
		(value) => !value || (Array.isArray(value) && value.length === 0)
	);
	return isFieldEmpty;
}
