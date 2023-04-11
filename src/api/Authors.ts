import { Author, AuthorPayload } from '../interfaces';
import { Fetch } from './Fetch';

class Authors extends Fetch {
	async getAuthors(): Promise<Author[]> {
		return this.fetch<Author[]>(`/authors/all`);
	}
	async postAuthor(author: AuthorPayload): Promise<void> {
		return this.fetch<void>(`/authors/add`, 'POST', author);
	}
}

const authorApi = new Authors();

export default authorApi;
