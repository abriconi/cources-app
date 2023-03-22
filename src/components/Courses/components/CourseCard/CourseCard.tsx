import React from 'react';
import Button from '../../../../common/Button/Button';

import { BUTTON_TEXT, mockedAuthorsList } from '../../../../constans';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { dateGenerator } from '../../../../helpers/dateGeneratop';
import { getAuthorNamesById } from '../../../../helpers/getAuthorNamesById';
import { Course } from '../../../../interfaces';

import './courseCard.css';

interface Props {
	courseData: Course;
}

const CourseCard = ({ courseData }: Props) => {
	return (
		<div className='courseCard'>
			<div className='courseMainInfo'>
				<h1 className='courseName'>{courseData.title}</h1>
				<p className='courseDescription'>{courseData.description}</p>
			</div>
			<div className='courseAdditionalInfoWrapper'>
				<div className='courseAdditionalInfoSection'>
					<p className='infoTitle'>Authors:</p>
					<p className='infoData authorsStyle'>
						{getAuthorNamesById(mockedAuthorsList, courseData.authors)}
					</p>
				</div>
				<div className='courseAdditionalInfoSection'>
					<p className='infoTitle'>Duration:</p>
					<p className='infoData'>{pipeDuration(courseData.duration)}</p>
				</div>
				{courseData.creationDate && (
					<div className='courseAdditionalInfoSection'>
						<p className='infoTitle'>Created:</p>
						<p className='infoData'>{dateGenerator(courseData.creationDate)}</p>
					</div>
				)}
				<Button
					buttonText={BUTTON_TEXT.showCourse}
					aligning=''
					type={'button'}
				/>
			</div>
		</div>
	);
};
export default CourseCard;
