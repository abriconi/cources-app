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
