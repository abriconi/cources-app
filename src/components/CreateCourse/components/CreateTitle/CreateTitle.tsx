import React from 'react';
import Input from '../../../../common/Input/Input';
import Textarea from '../../../../common/Textarea/Textrarea';
import Button from '../../../../common/Button/Button';
import { BUTTON_TEXT } from '../../../../constans';

import { PLACEHOLDER_TEXT } from '../../../../constans';

import './createTitle.css';

function CreateTitle() {
	return (
		<div className='createTitleWrapper'>
			<div className='titleWrapper'>
				<Input
					labelText='Title'
					name='courseTitle'
					placeholder={PLACEHOLDER_TEXT.enterTitle}
					type='text'
				/>
				<Button
					buttonText={BUTTON_TEXT.createCourse}
					type='submit'
					className='btnTitle'
				/>
			</div>

			<Textarea
				minLength={2}
				labelText={PLACEHOLDER_TEXT.description}
				name='courseDescription'
			/>
		</div>
	);
}

export default CreateTitle;
