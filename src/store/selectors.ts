import { RootState } from '.';

export const getUser = (state: RootState) => state.user;

export const getCoursesAll = (state: RootState) => state.courses.all;
export const getAuthorsAll = (state: RootState) => state.authors.all;
