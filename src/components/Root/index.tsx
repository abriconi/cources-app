import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

import './index.css';

const Root = () => {
	return (
		<div className='root'>
			<Header />
			<Outlet />
		</div>
	);
};

export default Root;
