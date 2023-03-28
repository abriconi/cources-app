import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';

import { pipeDuration } from '../../../../helpers/pipeDuration';
import { PLACEHOLDER_TEXT } from '../../../../constans';

import './addDurationNewCourse.css';

interface Props {
	duration: string;
	setDuration: (value: string) => void;
}

const AddDurationNewCourse: React.FC<Props> = ({ duration, setDuration }) => {
	const [formattedDuration, setFormattedDuration] = useState(pipeDuration(0));

	function getDurationFormatted(value: string) {
		const duration: number = parseInt(value);
		if (!isNaN(duration) && duration > 0) {
			setDuration(value);
			setFormattedDuration(pipeDuration(duration));
		} else {
			setDuration('');
			setFormattedDuration(pipeDuration(0));
		}
	}

	return (
		<div>
			<Input
				placeholder={PLACEHOLDER_TEXT.enterDuration}
				labelText='Duration'
				minLength={1}
				value={duration}
				onChange={getDurationFormatted}
			/>
			<p className='durationDescription'>
				Duration: <span className='durationTime'>{formattedDuration}</span>{' '}
			</p>
		</div>
	);
};

export default AddDurationNewCourse;
