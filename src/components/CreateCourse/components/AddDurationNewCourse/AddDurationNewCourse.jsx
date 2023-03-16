import React, { useState } from 'react';
import Input from '../../../common/Input/Input';
import './addDurationNewCourse.css';
import { pipeDuration } from '../../../helpers/pipeDuration';

function AddDurationNewCourse() {
	const [formattedDuration, setFormattedDuration] = useState(pipeDuration('0'));
	function getDurationFormatted(event) {
		setFormattedDuration(pipeDuration(event.target.value || '0'));
	}

	return (
		<div>
			<Input
				placeholder='Enter duration in minutes'
				labelText='Duration'
				name='duration'
				onChange={getDurationFormatted}
			/>
			<p className='durationDescription'>
				Duration: <span className='durationTime'>{formattedDuration}</span>{' '}
			</p>
		</div>
	);
}

export default AddDurationNewCourse;
