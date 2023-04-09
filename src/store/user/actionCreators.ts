import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '..';
import userApi from '../../api/User';
import { UserDataAuth } from '../../interfaces';
import {
	LOGIN_FAILURE,
	LOGIN,
	LOGIN_SUCCESS,
	LOGOUT,
	USERS_ME_SUCCESS,
	USERS_ME_FAILURE,
	UserActionTypes,
} from './actionTypes';

export const login =
	(
		user: UserDataAuth
	): ThunkAction<Promise<void>, RootState, null, UserActionTypes> =>
	async (dispatch: Dispatch<UserActionTypes>) => {
		dispatch({ type: LOGIN });

		try {
			const token = await userApi.userLogin(user);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: { token },
			});
		} catch (error) {
			dispatch({ type: LOGIN_FAILURE, error: (error as Error).message });
		}
	};

export const logout =
	(): any => async (dispatch: Dispatch<UserActionTypes>) => {
		await userApi.userLogout();
		dispatch({ type: LOGOUT });
	};

export const usersMe = () => async (dispatch: Dispatch<UserActionTypes>) => {
	try {
		const response = await userApi.usersMe();

		dispatch({
			type: USERS_ME_SUCCESS,
			payload: {
				name: response.name,
				email: response.email,
				role: response.role,
			},
		});
	} catch (error) {
		dispatch({ type: USERS_ME_FAILURE, error: (error as Error).message });
	}
};
