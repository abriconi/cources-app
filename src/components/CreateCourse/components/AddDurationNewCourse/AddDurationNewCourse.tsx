import { ChangeEvent } from 'react';
import React, { useState } from 'react';
import Input from '../../../common/Input/Input';
import './addDurationNewCourse.css';
import { pipeDuration } from '../../../helpers/pipeDuration';

function AddDurationNewCourse() {
	const [formattedDuration, setFormattedDuration] = useState(pipeDuration('0'));
	function getDurationFormatted(event: ChangeEvent<HTMLInputElement>) {
		const duration: number = parseInt(event.target.value);
		if (!isNaN(duration) && duration > 0) {
			setFormattedDuration(pipeDuration(duration));
		} else {
			setFormattedDuration(pipeDuration(0));
		}
	}

	return (
		<div>
			<Input
				placeholder='Enter duration in minutes'
				labelText='Duration'
				name='duration'
				minLength='1'
				onChange={getDurationFormatted}
			/>
			<p className='durationDescription'>
				Duration: <span className='durationTime'>{formattedDuration}</span>{' '}
			</p>
		</div>
	);
}

export default AddDurationNewCourse;
