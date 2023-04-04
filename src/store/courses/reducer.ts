// import { Course } from '../../interfaces';
import { Course } from '../../interfaces';
import {
	CoursesActionTypes,
	DELETE_COURSE_FAILURE,
	DELETE_COURSE_SUCCSESS,
	GET_COURSES_FAILURE,
	GET_COURSES_SUCCESS,
} from './actionTypes';

export interface CourseState {
	all: Course[];
	error?: string;
	// loading?: boolean;
}

const initialState: CourseState = {
	all: [],
};
export function coursesReduser(
	state = initialState,
	action: CoursesActionTypes
): CourseState {
	switch (action.type) {
		case GET_COURSES_SUCCESS:
			return {
				...state,
				all: [...action.payload],
			};
		case GET_COURSES_FAILURE:
			return {
				...state,
				error: action.error,
			};
		case DELETE_COURSE_SUCCSESS:
			return {
				...state,
				all: state.all.filter((course) => course.id !== action.id),
			};
		case DELETE_COURSE_FAILURE:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
}
