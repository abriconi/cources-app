import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthorsAll } from '../../store/selectors';

import { getAuthorNamesById } from '../../helpers/getAuthorNamesById';
import { pipeDuration } from '../../helpers/pipeDuration';
import { dateGenerator } from '../../helpers/dateGeneratop';
import { Author, Course } from '../../interfaces/index';
import { getCourseByID } from '../../api/getCourseByID';
import './courseInfo.css';

const CourseInfo = () => {
	const routeParams = useParams();
	const [course, setCourse] = useState<Course>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string>();
	const authors: Author[] = useSelector(getAuthorsAll);

	useEffect(() => {
		async function fetchData() {
			try {
				const courseData = await getCourseByID(routeParams.courseId); //if need to fetch data from server
				setCourse(courseData);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}

				throw error;
			} finally {
				setLoading(false);
			}
		}

		setLoading(true);
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading</div>;
	}
	return (
		<div className='courseInfoCardWrapper'>
			<Link to='/courses' className='linkBackToCourses'>
				&#60; Back to courses
			</Link>

			<div className='courseInfoCard'>
				{!loading && error ? (
					<div>{error}</div>
				) : (
					<>
						<h2 className='courseName'>{course?.title}</h2>
						<div className='courseInfoMainInfo'>
							<article className='courseDescription'>
								{course?.description}
							</article>
							<div className='courseAdditionalInfoWrapper'>
								<div className='courseAdditionalInfoSection'>
									<p className='infoTitle'>ID:</p>
									<p className='infoData'>{course?.id}</p>
								</div>
								<div className='courseAdditionalInfoSection'>
									<p className='infoTitle'>Duration:</p>
									<p className='infoData'>
										{pipeDuration(Number(course?.duration))}
									</p>
								</div>
								<div className='courseAdditionalInfoSection'>
									<p className='infoTitle'>Created:</p>
									<p className='infoData'>
										{dateGenerator(course?.creationDate)}
									</p>
								</div>
								<div className='courseAuthors'>
									<p className='infoTitle'>Autors:</p>
									<p className='infoData'>
										{getAuthorNamesById(authors, course?.authors || [])}
									</p>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default CourseInfo;
