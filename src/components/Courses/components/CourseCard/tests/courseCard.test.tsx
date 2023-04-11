import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import CourseCard from '../CourseCard';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mockedStore } from '../../../../../store/mockedStore';
import { Course } from '../../../../../interfaces';

describe('CourseCard', () => {
	afterEach(cleanup);

	const courseData: Course = {
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: 'Lorem Ipsum',
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	};

	test('should display title', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseCard courseData={courseData} />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getByText('JavaScript')).toBeInTheDocument();
	});

	test('should display description', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseCard courseData={courseData} />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument();
	});

	test('should display duration in the correct format', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseCard courseData={courseData} />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getByText('2:40 hours')).toBeInTheDocument();
	});

	test('should display authors list', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseCard courseData={courseData} />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getByText('Vasiliy Dobkin, Nicolas Kim')).toBeInTheDocument();
	});

	test('should display created date in the correct format', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseCard courseData={courseData} />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getByText('08.03.2021')).toBeInTheDocument();
	});
});
