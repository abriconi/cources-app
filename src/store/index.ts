import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { userReducer, UserState } from './user/reducer';
import { coursesReduser, CourseState } from './courses/reducer';
import { authorsReduser, AuthorState } from './author/reducer';
import { courses } from './courses/actionCreators';
import { authors } from './author/actionCreators';

export interface RootState {
	user: UserState;
	courses: CourseState;
	authors: AuthorState;
}

const rootReducer = combineReducers<RootState>({
	// combining all the reducers in 1 as an object, for that need to import them
	user: userReducer,
	courses: coursesReduser,
	authors: authorsReduser,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

if (store.getState()?.user?.isAuth) {
	store.dispatch<any>(courses());
	store.dispatch<any>(authors());
}
