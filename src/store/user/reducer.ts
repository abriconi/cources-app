import type { Action } from 'redux';

export interface UserState {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
}

const token = localStorage.getItem('token') ?? '';
const user = JSON.parse(localStorage.getItem('user') ?? '{}');

const initialState: UserState = {
	isAuth: Boolean(token),
	name: user?.name ?? '',
	email: user?.email ?? '',
	token,
};

export function userReducer(state = initialState, action: Action<any>) {
	switch (action.type) {
		// case 'increment':
		// 	return { ...state, value: state.value + 1 };
		// case 'decrement':
		// 	return { ...state, value: state.value - 1 };
		// case 'incrementByAmount':
		// 	return { ...state, value: state.value + action.payload };
		default:
			return state;
	}
}
