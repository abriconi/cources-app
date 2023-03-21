import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

export const router = createBrowserRouter([
	{ path: '/courses', element: <Courses /> },
	{ path: '/courses/:courseId', element: <CourseInfo /> },
	{ path: '/registration', element: <Registration /> },
	{ path: '/login', element: <Login /> },
]);
