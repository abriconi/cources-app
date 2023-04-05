import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '..';
import { userLogin } from '../../api/userLogin';
import { User } from '../../interfaces';
import {
	LOGIN_FAILURE,
	LOGIN,
	LOGIN_SUCCESS,
	LOGOUT,
	LogoutAction,
	UserActionTypes,
} from './actionTypes';

export const login =
	(user: User): ThunkAction<Promise<void>, RootState, null, UserActionTypes> =>
	async (dispatch: Dispatch<UserActionTypes>) => {
		dispatch({ type: LOGIN });

		try {
			const response = await userLogin(user);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: {
					token: response.result,
					name: response.user.name,
					email: response.user.email,
				},
			});
		} catch (error) {
			dispatch({ type: LOGIN_FAILURE, error: (error as Error).message });
		}
	};

export const logout = (dispatch: Dispatch<LogoutAction>) => {
	dispatch({ type: LOGOUT });
};
