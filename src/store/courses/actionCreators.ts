import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '..';
import { getCourses } from '../../api/getCourses';
import {
	GET_COURSES_SUCCESS,
	GET_COURSES_FAILURE,
	CoursesActionTypes,
	DELETE_COURSE_SUCCSESS,
	DELETE_COURSE_FAILURE,
	CREATE_COURSE_FAILURE,
	CREATE_COURSE_SUCCSESS,
	EDIT_COURSE_SUCCSESS,
	EDIT_COURSE_FAILURE,
} from './actionTypes';
import { Course, CoursePayload } from '../../interfaces';
import { putCourseToServer } from '../../api/putCourseById';
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
export const createCourse =
	(
		course: CoursePayload
	): ThunkAction<Promise<void>, RootState, null, CoursesActionTypes> =>
	async (dispatch: Dispatch<CoursesActionTypes>) => {
		// await deleteCourseByID(id);

		try {
			dispatch({
				type: CREATE_COURSE_SUCCSESS,
				course: course as Course,
			});
		} catch (error) {
			dispatch({
				type: CREATE_COURSE_FAILURE,
				error: "Can't update course",
			});
		}
	};
export const editCourse =
	(
		id: string,
		course: CoursePayload
	): ThunkAction<Promise<void>, RootState, null, CoursesActionTypes> =>
	async (dispatch: Dispatch<CoursesActionTypes>) => {
		const response = await putCourseToServer(id, course);

		console.log(response);

		try {
			dispatch({
				type: EDIT_COURSE_SUCCSESS,
				course: course as Course,
			});
		} catch (error) {
			dispatch({
				type: EDIT_COURSE_FAILURE,
				error: "Can't create course",
			});
		}
	};
