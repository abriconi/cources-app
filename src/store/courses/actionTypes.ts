import { Course } from '../../interfaces';

export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE';

export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCSESS';
export const DELETE_COURSE_FAILURE = 'DELETE_COURSE_FAILURE';

export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCSES';
export const CREATE_COURSE_FAILURE = 'CREATE_COURSE_FAILURE';

export const EDIT_COURSE_SUCCESS = 'EDIT_COURSE_SUCCSES';
export const EDIT_COURSE_FAILURE = 'EDIT_COURSE_FAILURE';

export interface GetCoursesSuccessAction {
	type: typeof GET_COURSES_SUCCESS;
	payload: Course[];
}

interface GetCoursesFailureAction {
	type: typeof GET_COURSES_FAILURE;
	error: string;
}

interface DeleteCourseSuccessAction {
	type: typeof DELETE_COURSE_SUCCESS;
	id: string;
}

interface DeleteCourseFailureAction {
	type: typeof DELETE_COURSE_FAILURE;
	error: string;
}

interface CreateCourseSuccessAction {
	type: typeof CREATE_COURSE_SUCCESS;
	course: Course;
}

interface CreteCourseFailureAction {
	type: typeof CREATE_COURSE_FAILURE;
	error: string;
}

interface EditCourseSuccessAction {
	type: typeof EDIT_COURSE_SUCCESS;
	course: Course;
}

interface EditCourseFailureAction {
	type: typeof EDIT_COURSE_FAILURE;
	error: string;
}

export type CoursesActionTypes =
	| GetCoursesSuccessAction
	| GetCoursesFailureAction
	| DeleteCourseSuccessAction
	| DeleteCourseFailureAction
	| CreateCourseSuccessAction
	| CreteCourseFailureAction
	| EditCourseSuccessAction
	| EditCourseFailureAction;
