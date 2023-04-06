import React, { ReactNode, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { UserState } from '../../store/user/reducer';

interface PrivateRouteProps {
	component: ComponentType<any>;
	user: UserState;
}

const PrivateRoute = ({
	component: ComponentToRender,
	user,
}: PrivateRouteProps): ReactNode => {
	if (user.role === 'admin') {
		return <ComponentToRender />;
	} else {
		return <Navigate to='/courses' />;
	}
};

export default PrivateRoute;
