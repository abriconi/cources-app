import { CoursePayload } from '../interfaces/index';

export function isAllFieldesFilled(course: CoursePayload): boolean {
	return !Object.values(course).some(
		(value) => !value || (Array.isArray(value) && value.length === 0)
	);
}
