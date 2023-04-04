import { Author } from '../../interfaces';

import {
	AuthorsActionTypes,
	GET_AUTHORS_FAILURE,
	GET_AUTHORS_SUCCESS,
} from './actionTypes';

export interface AuthorState {
	all: Author[];
	error?: string;
	// loading?: boolean;
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
		default:
			console.log('state', state);
			return state;
	}
}
