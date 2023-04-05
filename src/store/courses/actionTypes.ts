import { Course } from '../../interfaces';

export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE';

export const DELETE_COURSE_SUCCSESS = 'DELETE_COURSE_SUCCSESS';
export const DELETE_COURSE_FAILURE = 'DELETE_COURSE_FAILURE';

export const CREATE_COURSE_SUCCSESS = 'CREATE_COURSE_SUCCSES';
export const CREATE_COURSE_FAILURE = 'CREATE_COURSE_FAILURE';

// export type CoursesSuccessActionPayload = Omit<UserState, 'isAuth'>;
export interface GetCoursesSuccessAction {
	type: typeof GET_COURSES_SUCCESS;
	payload: Course[];
}

interface GetCoursesFailureAction {
	type: typeof GET_COURSES_FAILURE;
	error: string;
}

interface DeleteCourseSuccsessAction {
	type: typeof DELETE_COURSE_SUCCSESS;
	id: string;
}

interface DeleteCourseFailureAction {
	type: typeof DELETE_COURSE_FAILURE;
	error: string;
}

interface CreateCourseSuccsessAction {
	type: typeof CREATE_COURSE_SUCCSESS;
	course: Course;
}

interface CreteCourseFailureAction {
	type: typeof CREATE_COURSE_FAILURE;
	error: string;
}

export type CoursesActionTypes =
	| GetCoursesSuccessAction
	| GetCoursesFailureAction
	| DeleteCourseSuccsessAction
	| DeleteCourseFailureAction
	| CreateCourseSuccsessAction
	| CreteCourseFailureAction;
