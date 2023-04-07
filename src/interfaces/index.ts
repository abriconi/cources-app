export type Author = {
	id: string;
	name: string;
};

export type AuthorPayload = Omit<Author, 'id'>;

export type Course = {
	id: string;
	title: string;
	description: string;
	creationDate: string | undefined;
	duration: number;
	authors: string[];
};

export type CoursePayload = Omit<Course, 'id'>;

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

export type loginResponce = {
	successful: boolean;
	result: string;
	user: {
		email: string;
		name: string;
	};
};

export type usersMeResponce = {
	successful: boolean;
	result: {
		name: string | null;
		email: string;
		password: string;
		role: string;
		id: string;
	};
};
