import Input from '../../../common/Input/Input';
import Textarea from '../../../common/Textarea/Textrarea';
import { PLACEHOLDER_TEXT } from '../../../constans';

import './createTitle.css';
function CreateTitle() {
	return (
		<div className='titleWrapper'>
			<Input
				labelText='Title'
				name='courseTitle'
				placeholder={PLACEHOLDER_TEXT.enterTitle}
			/>
			<Textarea
				minlength='2'
				labelText={PLACEHOLDER_TEXT.description}
				name='courseDescription'
			/>
		</div>
	);
}

export default CreateTitle;
