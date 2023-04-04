import { Author } from '../../interfaces';

export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS';
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE';

interface GetAuthorsSuccess {
	type: typeof GET_AUTHORS_SUCCESS;
	payload: Author[];
}

interface GetAuthorFailure {
	type: typeof GET_AUTHORS_FAILURE;
	error: string;
}

export type AuthorsActionTypes = GetAuthorsSuccess | GetAuthorFailure;
