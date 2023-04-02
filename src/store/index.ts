import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { userReducer, UserState } from './user/reducer';

export interface RootState {
	user: UserState;
}

const rootReducer = combineReducers<RootState>({
	// combining all the reducers in 1 as an object, for that need to import them
	user: userReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
