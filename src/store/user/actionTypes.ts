import { UserState } from './reducer';

export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export interface LogoutAction {
	type: typeof LOGOUT;
}
interface LoginStartAction {
	type: typeof LOGIN;
}
export type LoginSuccessActionPayload = Omit<UserState, 'isAuth'>;
interface LoginSuccessAction {
	type: typeof LOGIN_SUCCESS;
	payload: LoginSuccessActionPayload;
}

interface LoginFailureAction {
	type: typeof LOGIN_FAILURE;
	error: string;
}

export type UserActionTypes =
	| LogoutAction
	| LoginStartAction
	| LoginSuccessAction
	| LoginFailureAction;
