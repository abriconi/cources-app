import { UserDataAuth, NewUser } from '../interfaces';
import { Fetch } from './Fetch';
import { usersMeResponce } from '../interfaces';

class UserApi extends Fetch {
	async userLogin(user: UserDataAuth): Promise<string> {
		return this.fetch<string>(`/login`, 'POST', user);
	}

	async userLogout(): Promise<void> {
		return this.fetch<void>(`/logout`, 'DELETE');
	}

	async userRegistration(newUser: NewUser): Promise<void> {
		return this.fetch<void>(`/register`, 'POST', newUser);
	}

	async usersMe(): Promise<usersMeResponce> {
		return this.fetch<usersMeResponce>(`/users/me`);
	}
}

const userApi = new UserApi();

export default userApi;
