import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Root from './components/Root';
import { store } from './store';
import { courses } from './store/courses/actionCreators';
import { authors } from './store/author/actionCreators';

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

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/courses',
				element: <Courses />,
				loader: withAuth(() => {
					store.dispatch<any>(courses());
					store.dispatch<any>(authors());
					return null;
				}),
			},
			{
				path: '/courses/:courseId',
				element: <CourseInfo />,
				loader: withAuth(),
			},
			{ path: '/registration', element: <Registration />, loader: withoutAuth },
			{ path: '/login', element: <Login />, loader: withoutAuth },
			{ path: '/', element: <Login />, loader: withoutAuth },
			{ path: '/add', element: <CreateCourse />, loader: withAuth() },
		],
	},

	{ path: '*', loader: () => redirect('/courses') },
]);
