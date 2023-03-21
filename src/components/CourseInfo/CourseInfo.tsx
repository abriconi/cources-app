import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';

import { getCourseByID } from '../../api/getCourse';
import { BUTTON_TEXT } from '../../constans';
import { mockedAuthorsList } from '../../constans';
import { Course } from '../../interfaces';
import { pipeDuration } from '../../helpers/pipeDuration';
import { getAuthorNamesById } from '../../helpers/getAuthorNamesById';

import './courseInfo.css';

function CourseInfo() {
	const routeParams = useParams();
	const [course, setCourse] = useState<Course>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string>();
	const navigate = useNavigate();

	function onClickHandler() {
		navigate('/courses');
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const courseData = await getCourseByID(routeParams.courseId);
				setCourse(courseData);
				console.log('2 courseData', courseData);
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

		console.log(3);
	}, [routeParams.courseId]);
	console.log(4, course);

	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<div className='courseInfoCardWrapper'>
			<Button
				buttonText={BUTTON_TEXT.backToCourses}
				type={'button'}
				onClick={onClickHandler}
				className='btnBackToCourses'
			/>

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
									<p className='infoData'>{course?.creationDate}</p>
								</div>
								<div className='courseAuthors'>
									<p className='infoTitle'>Autors:</p>
									<p className='infoData'>
										{getAuthorNamesById(mockedAuthorsList, course?.authors)}
									</p>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default CourseInfo;
