import React from 'react';
import Input from '../../../../common/Input/Input';
import Textarea from '../../../../common/Textarea/Textrarea';
import Button from '../../../../common/Button/Button';
import { BUTTON_TEXT } from '../../../../constans';

import { PLACEHOLDER_TEXT } from '../../../../constans';

import './createTitle.css';

interface Props {
	titleValue: string;
	setTitleValue: (value: string) => void;
	descriptionValue: string;
	setDescriptionValue: (value: string) => void;
}

const CreateTitle: React.FC<Props> = ({
	titleValue,
	setTitleValue,
	descriptionValue,
	setDescriptionValue,
}) => {
	const onChangeTitle = (value: string) => {
		setTitleValue(value);
	};
	const onChangeDescription = (value: string) => {
		setDescriptionValue(value);
	};
	return (
		<div className='createTitleWrapper'>
			<div className='titleWrapper'>
				<Input
					labelText='Title'
					value={titleValue}
					onChange={onChangeTitle}
					placeholder={PLACEHOLDER_TEXT.enterTitle}
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
				value={descriptionValue}
				onChange={onChangeDescription}
			/>
		</div>
	);
};

export default CreateTitle;
