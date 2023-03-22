import React, { ReactElement } from 'react';
import './createCourseBody.css';

interface Props {
	top: ReactElement;
	bottom: ReactElement;
}

const CreateCourseBody = ({ top, bottom }: Props) => {
	return (
		<div className='createCourseBody'>
			<div className='columnLayout'>{top}</div>
			<div className='columnLayout'>{bottom}</div>
		</div>
	);
};
export default CreateCourseBody;
