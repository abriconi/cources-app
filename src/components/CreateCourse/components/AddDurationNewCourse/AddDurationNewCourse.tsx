import React, { useState, ChangeEvent } from 'react';
import Input from '../../../../common/Input/Input';

import { pipeDuration } from '../../../../helpers/pipeDuration';
import { PLACEHOLDER_TEXT } from '../../../../constans';

import './addDurationNewCourse.css';

function AddDurationNewCourse() {
	const [formattedDuration, setFormattedDuration] = useState(pipeDuration(0));
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
				placeholder={PLACEHOLDER_TEXT.enterDuration}
				labelText='Duration'
				name='duration'
				minLength={1}
				onChange={getDurationFormatted}
			/>
			<p className='durationDescription'>
				Duration: <span className='durationTime'>{formattedDuration}</span>{' '}
			</p>
		</div>
	);
}

export default AddDurationNewCourse;
