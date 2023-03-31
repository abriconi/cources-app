import { createStore, combineReducers } from 'redux';
import { userReducer, UserState } from './user/reducer';

export interface RootState {
	user: UserState;
}

const rootReducer = combineReducers<RootState>({
	user: userReducer,
});

export const store = createStore(rootReducer);
