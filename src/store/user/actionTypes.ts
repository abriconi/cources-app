import { UserState } from './reducer';

export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const USERS_ME_SUCCESS = 'USERS_ME_SUCCESS';
export const USERS_ME_FAILURE = 'USERS_ME_FAILURE';

export interface LogoutAction {
	type: typeof LOGOUT;
}
interface LoginStartAction {
	type: typeof LOGIN;
}

interface LoginSuccessAction {
	type: typeof LOGIN_SUCCESS;
	payload: LoginSuccessActionPayload;
}

interface LoginFailureAction {
	type: typeof LOGIN_FAILURE;
	error: string;
}

interface UsersMeSuccessAction {
	type: typeof USERS_ME_SUCCESS;
	payload: UsersMeSuccessActionPayload;
}
interface UsersMeFailureAction {
	type: typeof USERS_ME_FAILURE;
	error: string;
}
export type LoginSuccessActionPayload = Omit<UserState, 'isAuth'>;

export type UsersMeSuccessActionPayload = {
	name: string | null;
	email: string;
	role: string;
};
export type UserActionTypes =
	| LogoutAction
	| LoginStartAction
	| LoginSuccessAction
	| LoginFailureAction
	| UsersMeSuccessAction
	| UsersMeFailureAction;
