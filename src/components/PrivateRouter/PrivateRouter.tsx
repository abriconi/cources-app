import React, { ReactNode, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserState } from '../../store/user/reducer';
import { getUser } from '../../store/selectors';

interface PrivateRouteProps {
	component: ComponentType<any>;
}

const PrivateRoute = ({
	component: ComponentToRender,
}: PrivateRouteProps): ReactNode => {
	const user: UserState = useSelector(getUser);
	if (user.role === 'admin') {
		return <ComponentToRender />;
	} else {
		return <Navigate to='/courses' />;
	}
};

export default PrivateRoute;
