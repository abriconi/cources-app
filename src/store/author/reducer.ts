import { Author } from '../../interfaces';

import {
	ADD_AUTHORS_SUCCESS,
	AuthorsActionTypes,
	GET_AUTHORS_FAILURE,
	GET_AUTHORS_SUCCESS,
} from './actionTypes';

export interface AuthorState {
	all: Author[];
	error?: string;
}

const initialState: AuthorState = {
	all: [],
};

export function authorsReduser(
	state = initialState,
	action: AuthorsActionTypes
): AuthorState {
	switch (action.type) {
		case GET_AUTHORS_SUCCESS:
			return {
				...state,
				all: [...action.payload],
			};
		case GET_AUTHORS_FAILURE:
			return {
				...state,
				error: action.error,
			};
		case ADD_AUTHORS_SUCCESS:
			return {
				...state,
				all: [...state.all, action.author],
			};
		default:
			return state;
	}
}
