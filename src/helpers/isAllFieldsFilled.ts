import { Course } from '../interfaces/index';

export function isAllFieldesFilled(course: Course): boolean {
	return !Object.values(course).some(
		(value) => !value || (Array.isArray(value) && value.length === 0)
	);
}
