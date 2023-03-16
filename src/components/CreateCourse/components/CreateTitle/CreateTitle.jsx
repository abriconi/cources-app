import Input from '../../../common/Input/Input';
import Textarea from '../../../common/Textarea/Textrarea';

import './createTitle.css';
function CreateTitle(props) {
	return (
		<div className='titleWrapper' onChangeTextArea={props}>
			<Input labelText='Title' name='courseTitle' placeholder='Enter title' />
			<Textarea
				minlength='2'
				labelText='Description'
				name='courseDescription'
			/>
		</div>
	);
}

export default CreateTitle;
