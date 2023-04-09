import { Author, AuthorPayload } from '../interfaces';
import { Fetch } from './Fetch';
// import { usersMeResponce } from '../interfaces';

class Authors extends Fetch {
	async getAuthors(): Promise<Author[]> {
		return this.fetch<Author[]>(`/authors/all`);
	}
	async postAuthor(author: AuthorPayload): Promise<void> {
		return this.fetch<void>(`/authors/add`, 'POST', author);
	}
	// 	async userRegistration(newUser: NewUser): Promise<void> {
	// 		return this.fetch<void>(`/register`, 'POST', newUser);
	// 	}
	// 	async usersMe(): Promise<usersMeResponce> {
	// 		return this.fetch<usersMeResponce>(`/users/me`);
	// 	}
}

const authorApi = new Authors();

export default authorApi;
