import { cleanup } from '@testing-library/react';
import { coursesReduser } from '../reducer';
import {
	CoursesActionTypes,
	// CreateCourseSuccessAction,
	CREATE_COURSE_SUCCESS,
	GET_COURSES_SUCCESS,
} from '../actionTypes';
import { Course } from '../../../interfaces';

describe('Reducer', () => {
	const initialState = { all: [] };

	afterEach(cleanup);

	test('should return the initial state', () => {
		const action: CoursesActionTypes = {
			type: GET_COURSES_SUCCESS,
			payload: [],
		};
		expect(coursesReduser(undefined, action)).toEqual(initialState);
	});

	test('should handle SAVE_COURSE and returns new state', () => {
		const course: Course = {
			id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551mn',
			title: 'Test',
			description: 'Lorem Ipsum',
			creationDate: '8/3/2022',
			duration: 170,
			authors: [
				'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
				'f762978b-61eb-4096-812b-ebde22838167',
			],
		};
		const action: CoursesActionTypes = {
			type: CREATE_COURSE_SUCCESS,
			course: course,
		};
		const newState = coursesReduser(initialState, action);
		expect(newState.all.length).toEqual(1);
	});

	test('should handle GET_COURSES and returns new state', () => {
		const newCourseS: Course[] = [
			{
				id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551mn',
				title: 'Test',
				description: 'Lorem Ipsum',
				creationDate: '8/3/2022',
				duration: 170,
				authors: [
					'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
					'f762978b-61eb-4096-812b-ebde22838167',
				],
			},
		];
		const action: CoursesActionTypes = {
			type: GET_COURSES_SUCCESS,
			payload: newCourseS,
		};
		const newState = coursesReduser(initialState, action);
		expect(newState.all.length).toEqual(1);
	});
});
