import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Courses from '../Courses';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mockedStore } from '../../../store/mockedStore';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as any),
	useNavigate: () => mockedUsedNavigate,
}));

describe('Courses', () => {
	afterEach(cleanup);

	test('should display amount of CourseCard equal length of courses array', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<Courses />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getAllByTestId('CourseCard')).toHaveLength(1);
	});

	test('should display empty container if courses array length is 0', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<Courses />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.queryAllByTestId('empty-container')).toHaveLength(0);
	});

	test('CourseForm should be showed after a click on a button "Add new course', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<Courses />
				</MemoryRouter>
			</Provider>
		);
		const button = screen.getByTestId('addNewCourse');
		fireEvent.click(button);

		expect(mockedUsedNavigate).toBeCalledWith('/add');
	});
});
