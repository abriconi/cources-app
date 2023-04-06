import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';
// import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import Root from './components/Root';
import { store } from './store';
import { Course } from './interfaces';

const isLogedIn = () => {
	return store.getState().user.isAuth;
};

const withAuth = (loaderFunc?: () => any) => async () => {
	if (!isLogedIn()) {
		return redirect('/login');
	}

	return loaderFunc ? await loaderFunc() : null;
};
function withoutAuth() {
	if (isLogedIn()) {
		return redirect('/courses');
	}
	return null;
}

const courseTest: Course = {
	id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd046464',
	title: 'Angular-test',
	description: 'description',
	creationDate: '10/11/2020',
	duration: 210,
	authors: [
		'df32994e-b23d-497c-9e4d-84e4dc02882f',
		'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
	],
};

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/courses',
				element: <Courses />,
				loader: withAuth(),
			},
			{
				path: '/courses/:courseId',
				element: <CourseInfo />,
				loader: withAuth(),
			},
			{ path: '/registration', element: <Registration />, loader: withoutAuth },
			{ path: '/login', element: <Login />, loader: withoutAuth },
			{ path: '/', element: <Login />, loader: withoutAuth },
			{
				path: '/add',
				element: <CourseForm course={courseTest} />,
				loader: withAuth(),
			},
			// {
			// 	path: '/courses/update/:courseId',
			// 	element: <PrivateRoute />,
			// 	children: [
			// 		{
			// 			path: '',
			// 			element: <CourseForm />,
			// 			loader: withAuth(),
			// 		},
			// 	],
			// },
		],
	},

	{ path: '*', loader: () => redirect('/courses') },
]);
