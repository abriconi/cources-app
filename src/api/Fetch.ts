type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type FetchResponse<T> =
	| {
			successful: false;
			errors: string[];
	  }
	| {
			successful: true;
			result: T;
	  };

export class Fetch {
	private readonly host = 'http://localhost:4000';

	protected async fetch<R>(
		url: string,
		method: FetchMethod = 'GET',
		body?: any
	): Promise<R> {
		const token = localStorage.getItem('token');

		const response = await fetch(`${this.host}${url}`, {
			method,
			headers: {
				'Content-Type': 'application/json',
				...(token ? { Authorization: token } : {}),
			},
			body: body ? JSON.stringify(body) : undefined,
		});

		if (!response.ok) {
			throw new Error('Failed request');
		}

		const payload = await response.text();
		if (!payload) {
			return true as any;
		}

		const result: FetchResponse<R> = JSON.parse(payload);

		if (!result.successful) {
			throw new Error(result.errors[0]);
		}

		return result.result;
	}
}
