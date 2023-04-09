import {
	LOGIN_FAILURE,
	LOGIN,
	LOGIN_SUCCESS,
	LOGOUT,
	UserActionTypes,
	LoginSuccessActionPayload,
	USERS_ME_SUCCESS,
	USERS_ME_FAILURE,
} from './actionTypes';

export interface UserState {
	isAuth: boolean;
	name: string | null;
	email: string;
	token: string;
	role?: string;
	error?: string;
	loading?: boolean;
}

const token = localStorage.getItem('token') ?? '';

const initialState: UserState = {
	loading: false,
	isAuth: Boolean(token),
	name: '',
	email: '',
	token,
	role: '',
};

const clearAuthData = () => {
	localStorage.removeItem('token');
};
const saveAuthData = ({ token }: LoginSuccessActionPayload) => {
	localStorage.setItem('token', token);
};

export function userReducer(
	state = initialState,
	action: UserActionTypes
): UserState {
	switch (action.type) {
		case LOGOUT:
			clearAuthData();

			return {
				...state,
				error: undefined,
				loading: false,
				isAuth: false,
				token: '',
				email: '',
				name: '',
			};
		case LOGIN:
			return {
				...state,
				error: undefined,
				loading: true,
			};
		case LOGIN_SUCCESS:
			saveAuthData(action.payload);
			return {
				...state,
				...action.payload,
				isAuth: Boolean(action.payload.token),
				loading: false,
			};
		case LOGIN_FAILURE:
			clearAuthData();
			return { ...state, error: action.error, loading: false };
		case USERS_ME_SUCCESS:
			return {
				...state,
				...action.payload,
			};
		case USERS_ME_FAILURE:
			return { ...state, error: action.error };
		default:
			return state;
	}
}
