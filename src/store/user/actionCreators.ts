import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '..';
import { userLogin } from '../../api/userLogin';
import { userLogout } from '../../api/userLogout';
import { usersMefromServer } from '../../api/usersMe';
import { User } from '../../interfaces';
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

export const logout =
	(): any => async (dispatch: Dispatch<UserActionTypes>) => {
		await userLogout();
		dispatch({ type: LOGOUT });
	};

export const usersMe = () => async (dispatch: Dispatch<UserActionTypes>) => {
	try {
		const response = await usersMefromServer();

		dispatch({
			type: USERS_ME_SUCCESS,
			payload: {
				name: response.result.name,
				email: response.result.email,
				role: response.result.role,
			},
		});
		console.log(response);
	} catch (error) {
		dispatch({ type: USERS_ME_FAILURE, error: (error as Error).message });
	}
};
