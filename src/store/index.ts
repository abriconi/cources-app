import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { userReducer, UserState } from './user/reducer';
import { coursesReduser, CourseState } from './courses/reducer';
import { authorsReduser, AuthorState } from './author/reducer';
import { courses } from './courses/actionCreators';
import { authors } from './author/actionCreators';
import { usersMe } from './user/actionCreators';

export interface RootState {
	user: UserState;
	courses: CourseState;
	authors: AuthorState;
}

const rootReducer = combineReducers<RootState>({
	user: userReducer,
	courses: coursesReduser,
	authors: authorsReduser,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

setTimeout(() => {
	if (store.getState()?.user?.isAuth) {
		store.dispatch<any>(courses());
		store.dispatch<any>(authors());
		store.dispatch<any>(usersMe());
	}
});
