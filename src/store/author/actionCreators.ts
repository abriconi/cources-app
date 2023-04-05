import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '..';
import { getAuthors } from '../../api/getAuthors';
import {
	GET_AUTHORS_SUCCESS,
	GET_AUTHORS_FAILURE,
	ADD_AUTHORS_FAILURE,
	ADD_AUTHORS_SUCCESS,
	AuthorsActionTypes,
} from './actionTypes';
import { Author } from '../../interfaces';

export const authors =
	(): ThunkAction<Promise<void>, RootState, null, AuthorsActionTypes> =>
	async (dispatch: Dispatch<AuthorsActionTypes>) => {
		try {
			const authors = await getAuthors();

			dispatch({
				type: GET_AUTHORS_SUCCESS,
				payload: authors,
			});
		} catch (error) {
			dispatch({ type: GET_AUTHORS_FAILURE, error: (error as Error).message });
		}
	};
export const addAuthor =
	(
		author: Author
	): ThunkAction<Promise<void>, RootState, null, AuthorsActionTypes> =>
	async (dispatch: Dispatch<AuthorsActionTypes>) => {
		try {
			dispatch({
				type: ADD_AUTHORS_SUCCESS,
				author,
			});
		} catch (error) {
			dispatch({ type: ADD_AUTHORS_FAILURE, error: "Can't add the author" });
		}
	};
