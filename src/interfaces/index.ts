export type Author = {
	id: string;
	name: string;
};

export type Course = {
	id: string;
	title: string;
	description: string;
	creationDate: string | undefined;
	duration: number;
	authors: string[];
};

export type AuthorsListObject = {
	[key: string]: string;
};

export type newUser = {
	name: string;
	password: string;
	email: string;
};

export type User = {
	password: string;
	email: string;
};
