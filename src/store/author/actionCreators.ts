import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '..';
import authorsApi from '../../api/Authors';
import {
	GET_AUTHORS_SUCCESS,
	GET_AUTHORS_FAILURE,
	ADD_AUTHORS_FAILURE,
	ADD_AUTHORS_SUCCESS,
	AuthorsActionTypes,
} from './actionTypes';
import { Author, AuthorPayload } from '../../interfaces';

export const authors =
	(): ThunkAction<Promise<void>, RootState, null, AuthorsActionTypes> =>
	async (dispatch: Dispatch<AuthorsActionTypes>) => {
		try {
			const authors: Author[] = await authorsApi.getAuthors();
			console.log(authors);

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
		author: AuthorPayload
	): ThunkAction<Promise<void>, RootState, null, AuthorsActionTypes> =>
	async (dispatch: Dispatch<AuthorsActionTypes>) => {
		try {
			await authorsApi.postAuthor(author);
		} catch (error) {
			console.log(error);
		}

		try {
			dispatch({
				type: ADD_AUTHORS_SUCCESS,
				author: author as Author,
			});
		} catch (error) {
			dispatch({ type: ADD_AUTHORS_FAILURE, error: "Can't add the author" });
		}
	};
