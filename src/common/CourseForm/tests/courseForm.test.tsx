import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { addAuthor } from '../../../store/author/actionCreators';

import CourseForm from '../CourseForm';

import { Course, Author, AuthorPayload } from '../../../interfaces/index';
import { mockedStore } from '../../../store/mockedStore';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
	...(jest.requireActual('react-redux') as any),
	useDispatch: () => mockDispatch,
}));
jest.mock('../../../store/author/actionCreators', () => ({
	...(jest.requireActual('../../../store/author/actionCreators') as any),
	addAuthor: jest.fn(),
}));

describe('CourseForm', () => {
	jest.spyOn(window, 'alert');

	afterEach(cleanup);
	const authors: Author[] = mockedStore.getState().authors.all;
	const course: Course = mockedStore.getState().courses.all[0];
	const handleCourseSubmit = jest.fn();
	const mainBtnText = 'Submit';

	test('should show authors lists (all and course authors)', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseForm
						course={course}
						handleCourseSubmit={handleCourseSubmit}
						mainBtnText={mainBtnText}
					/>
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getAllByTestId('author')).toHaveLength(authors.length);
	});

	test('"Create author" click button should call alert when field empty.', () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseForm
						course={course}
						handleCourseSubmit={handleCourseSubmit}
						mainBtnText={mainBtnText}
					/>
				</MemoryRouter>
			</Provider>
		);
		const createAuthorButton = screen.getByTestId('create-author');

		fireEvent.click(createAuthorButton);

		expect(window.alert).toBeCalledWith(`Field 'Author name' is empty`);
	});

	test('"Create author" click button should call dispatch.', () => {
		const authorName: AuthorPayload = {
			name: 'new author',
		};

		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseForm
						course={course}
						handleCourseSubmit={handleCourseSubmit}
						mainBtnText={mainBtnText}
					/>
				</MemoryRouter>
			</Provider>
		);
		const createAuthorInput = screen.getByTestId('create-author-input');
		const createAuthorButton = screen.getByTestId('create-author');

		fireEvent.change(createAuthorInput, { target: { value: 'new author' } });
		fireEvent.click(createAuthorButton);

		expect(addAuthor).toHaveBeenCalledWith(authorName);
		expect(mockDispatch).toHaveBeenCalled();
	});

	test('"Add author" button click should add an author to course authors list', () => {
		const { container } = render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseForm
						course={course}
						handleCourseSubmit={handleCourseSubmit}
						mainBtnText={mainBtnText}
					/>
				</MemoryRouter>
			</Provider>
		);
		const deleteAuthorButton = container
			.getElementsByClassName('authorListWrapper')[0]
			.querySelectorAll('.authorForm button')[0];

		expect(screen.getByTestId('authors-list').childElementCount).toEqual(2);

		fireEvent.click(deleteAuthorButton);

		expect(screen.getByTestId('authors-list').childElementCount).toEqual(1);
	});

	test('"Delete author" button click should delete an author from the course list', () => {
		const { container } = render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<CourseForm
						course={course}
						handleCourseSubmit={handleCourseSubmit}
						mainBtnText={mainBtnText}
					/>
				</MemoryRouter>
			</Provider>
		);
		const deleteAuthorButton = container
			.getElementsByClassName('addedAuthorsListWrapper')[0]
			.querySelectorAll('.authorForm button')[0];

		expect(screen.getByTestId('authors-list').childElementCount).toEqual(2);

		fireEvent.click(deleteAuthorButton);

		expect(screen.getByTestId('authors-list').childElementCount).toEqual(3);
	});
});
