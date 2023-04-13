import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserState } from '../../store/user/reducer';
import { getUser } from '../../store/selectors';

const PrivateRoute = ({ children }: any) => {
	const user: UserState = useSelector(getUser);
	if (user.role === 'admin') {
		return <>{children}</>;
	} else {
		return <Navigate to='/courses' />;
	}
};

export default PrivateRoute;
