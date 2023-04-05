import { Author } from '../../interfaces';

export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS';
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE';

export const ADD_AUTHORS_SUCCESS = 'ADD_AUTHORS_SUCCESS';
export const ADD_AUTHORS_FAILURE = 'ADD_AUTHORS_FAILURE';

interface GetAuthorsSuccess {
	type: typeof GET_AUTHORS_SUCCESS;
	payload: Author[];
}

interface GetAuthorFailure {
	type: typeof GET_AUTHORS_FAILURE;
	error: string;
}

interface AddAuthorsSuccess {
	type: typeof ADD_AUTHORS_SUCCESS;
	author: Author;
}

interface AddAuthorFailure {
	type: typeof ADD_AUTHORS_FAILURE;
	error: string;
}

export type AuthorsActionTypes =
	| GetAuthorsSuccess
	| GetAuthorFailure
	| AddAuthorsSuccess
	| AddAuthorFailure;
