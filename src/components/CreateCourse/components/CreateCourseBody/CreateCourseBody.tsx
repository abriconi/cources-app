import React, { ReactElement } from 'react';
import './createCourseBody.css';

type Props = {
	top: ReactElement;
	bottom: ReactElement;
};

function CreateCourseBody(props: Props) {
	return (
		<div className='createCourseBody'>
			<div className='columnLayout'>{props.top}</div>
			<div className='columnLayout'>{props.bottom}</div>
		</div>
	);
}
export default CreateCourseBody;
