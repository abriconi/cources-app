import React from 'react';

import Input from '../../../Input/Input';
import Textarea from '../../../Textarea/Textrarea';
import Button from '../../../Button/Button';

// import { BUTTON_TEXT } from '../../../../constans';
import { PLACEHOLDER_TEXT } from '../../../../constans';

import './createTitle.css';

interface Props {
	titleValue: string;
	setTitleValue: (value: string) => void;
	descriptionValue: string;
	setDescriptionValue: (value: string) => void;
	mainBtnText: string;
}

const CreateTitle: React.FC<Props> = ({
	titleValue,
	setTitleValue,
	descriptionValue,
	setDescriptionValue,
	mainBtnText,
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
				<Button buttonText={mainBtnText} type='submit' className='btnTitle' />
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
