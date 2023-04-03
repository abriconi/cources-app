import { Course } from '../../interfaces';

export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE';

// export type CoursesSuccessActionPayload = Omit<UserState, 'isAuth'>;
export interface GetCoursesSuccessAction {
	type: typeof GET_COURSES_SUCCESS;
	payload: Course[];
}

interface GetCoursesFailureAction {
	type: typeof GET_COURSES_FAILURE;
	error: string;
}

export type CoursesActionTypes =
	| GetCoursesSuccessAction
	| GetCoursesFailureAction;
