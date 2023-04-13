import { Course, CoursePayload } from '../interfaces';
import { Fetch } from './Fetch';

class Courses extends Fetch {
	async getCourse(id: string): Promise<Course> {
		return this.fetch<Course>(`/courses/${id}`);
	}

	async getCourses(): Promise<Course[]> {
		return this.fetch<Course[]>(`/courses/all`);
	}

	async createCourse(course: CoursePayload): Promise<Course> {
		return this.fetch<Course>(`/courses/add`, 'POST', course);
	}

	async updateCourse(id: string, course: CoursePayload): Promise<Course> {
		return this.fetch<Course>(`/courses/${id}`, 'PUT', course);
	}

	async deleteCourse(id: string): Promise<void> {
		return this.fetch<void>(`/courses/${id}`, 'DELETE');
	}
}

const coursesApi = new Courses();

export default coursesApi;
