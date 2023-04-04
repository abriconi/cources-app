import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '..';
import { getCourses } from '../../api/getCourses';
import {
	GET_COURSES_SUCCESS,
	GET_COURSES_FAILURE,
	CoursesActionTypes,
	// DeleteCoursesActionType,
	DELETE_COURSE_SUCCSESS,
	DELETE_COURSE_FAILURE,
} from './actionTypes';
// import { deleteCourseByID } from '../../api/deleteCourseById';

export const courses =
	(): ThunkAction<Promise<void>, RootState, null, CoursesActionTypes> =>
	async (dispatch: Dispatch<CoursesActionTypes>) => {
		try {
			const courses = await getCourses();

			dispatch({
				type: GET_COURSES_SUCCESS,
				payload: courses,
			});
		} catch (error) {
			dispatch({ type: GET_COURSES_FAILURE, error: (error as Error).message });
		}
	};
export const deleteCourse =
	(
		id: string
	): ThunkAction<Promise<void>, RootState, null, CoursesActionTypes> =>
	async (dispatch: Dispatch<CoursesActionTypes>) => {
		try {
			// await deleteCourseByID(id);

			dispatch({
				type: DELETE_COURSE_SUCCSESS,
				id,
			});
		} catch (error) {
			dispatch({
				type: DELETE_COURSE_FAILURE,
				error: 'failure',
			});
		}
	};
