import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { deleteCourse } from '../../../../store/courses/actionCreators';

import Button from '../../../../common/Button/Button';
import LogoEdit from './components/LogoEdit/LogoEdit';
import LogoRemove from './components/LogoRemove/LogoRemove';

import { BUTTON_TEXT } from '../../../../constans';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { dateGenerator } from '../../../../helpers/dateGeneratop';
import { getAuthorNamesById } from '../../../../helpers/getAuthorNamesById';
import { Author, Course } from '../../../../interfaces';

import './courseCard.css';
import { getUser, getAuthorsAll } from '../../../../store/selectors';

interface Props {
	courseData: Course;
}

const CourseCard: React.FC<Props> = ({ courseData }) => {
	const navigate = useNavigate();
	const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
	const userRole: any = useSelector(getUser).role;
	const authors: Author[] = useSelector(getAuthorsAll);

	function handleDelete() {
		dispatch(deleteCourse(courseData.id));
	}
	function handleEdit() {
		navigate(`/courses/update/${courseData.id}`);
	}
	function onClick() {
		navigate(`/courses/${courseData.id}`);
	}

	return (
		<div className='courseCard' data-testid='CourseCard'>
			<div className='courseMainInfo'>
				<h1 className='courseName'>{courseData.title}</h1>
				<p className='courseDescription'>{courseData.description}</p>
			</div>
			<div className='courseAdditionalInfoWrapper'>
				<div className='courseAdditionalInfoSection'>
					<p className='infoTitle'>Authors:</p>
					<p className='infoData authorsStyle'>
						{getAuthorNamesById(authors, courseData.authors)}
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
				<div className='navBtnContainer'>
					<Button
						buttonText={BUTTON_TEXT.showCourse}
						type={'button'}
						onClick={onClick}
					/>
					{userRole === 'admin' && (
						<>
							<Button type={'button'} className='btnEdit' onClick={handleEdit}>
								<LogoEdit />
							</Button>
							<Button
								type={'button'}
								onClick={handleDelete}
								className='btnEdit'
							>
								<LogoRemove />
							</Button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
export default CourseCard;
