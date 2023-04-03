import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '..';
import { getCourses } from '../../api/getCourses';
import {
	GET_COURSES_SUCCESS,
	GET_COURSES_FAILURE,
	CoursesActionTypes,
} from './actionTypes';

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
