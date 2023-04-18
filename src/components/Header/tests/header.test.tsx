import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Logo from '../components/Logo/Logo';
import Header from '../Header';
import { mockedStore } from '../../../store/mockedStore';

afterEach(cleanup);

test('Logo component should have logo', () => {
	render(<Logo />);
	const logo = screen.getByRole('img');
	expect(logo).toBeInTheDocument();
});

test('Header should have name', () => {
	render(
		<Provider store={mockedStore}>
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		</Provider>
	);

	expect(screen.queryByText('Test Name')).toBeInTheDocument();
});
