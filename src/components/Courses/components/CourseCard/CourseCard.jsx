import React from 'react';
import Button from '../../../common/Button/Button';
import './courseCard.css';
import { mockedAuthorsListObject } from '../../../constans';
import { pipeDuration } from '../../../helpers/pipeDuration';
import { dateGenerator } from '../../../helpers/dateGeneratop';

function CourseCard(props) {
	return (
		<div className='courseCard'>
			<div className='courseMainInfo'>
				<h1 className='courseName'>{props.courseData.title}</h1>
				<p className='courseDescription'>{props.courseData.description}</p>
			</div>
			<div className='courseAdditionalInfoWrapper'>
				<div className='courseAdditionalInfoSection'>
					<p className='infoTitle'>Authors:</p>
					<p className='infoData authorsStyle'>
						{props.courseData.authors
							.map((authorId) => mockedAuthorsListObject[authorId])
							.filter(Boolean)
							.join(', ')}
					</p>
				</div>
				<div className='courseAdditionalInfoSection'>
					<p className='infoTitle'>Duration:</p>
					<p className='infoData'>{pipeDuration(props.courseData.duration)}</p>
				</div>
				<div className='courseAdditionalInfoSection'>
					<p className='infoTitle'>Created:</p>
					<p className='infoData'>
						{dateGenerator(props.courseData.creationDate)}
					</p>
				</div>
				<Button buttonText='Show course' aligning='center' />
			</div>
		</div>
	);
}
export default CourseCard;
