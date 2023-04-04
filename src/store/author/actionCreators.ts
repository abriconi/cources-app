import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '..';
import { getAuthors } from '../../api/getAuthors';
import {
	GET_AUTHORS_SUCCESS,
	GET_AUTHORS_FAILURE,
	AuthorsActionTypes,
} from './actionTypes';

export const authors =
	(): ThunkAction<Promise<void>, RootState, null, AuthorsActionTypes> =>
	async (dispatch: Dispatch<AuthorsActionTypes>) => {
		try {
			const authors = await getAuthors();

			dispatch({
				type: GET_AUTHORS_SUCCESS,
				payload: authors,
			});
			console.log('authors', authors);
		} catch (error) {
			dispatch({ type: GET_AUTHORS_FAILURE, error: (error as Error).message });
		}
	};
