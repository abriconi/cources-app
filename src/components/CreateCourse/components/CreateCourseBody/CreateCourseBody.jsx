import CreateAuthor from '../CreateAuthor/CreateAuthor';
import AddDurationNewCourse from '../AddDurationNewCourse/AddDurationNewCourse';
import AutorsList from '../AutorsList/AutorsList';
import AddedAuthorsToCourse from '../AddedAuthorsToCourse/AddedAuthorsToCourse';

import './createCourseBody.css';

function CreateCourseBody(props) {
	return (
		<div className='createCourseBody'>
			<div className='columnLayout'>
				<CreateAuthor
					authorsList={props.authorsList}
					setAuthorsList={props.setAuthorsList}
				/>
				<AddDurationNewCourse />
			</div>
			<div className='columnLayout'>
				<AutorsList
					authorsList={props.authorsList}
					setAuthorsList={props.setAuthorsList}
					addedAuthorsList={props.addedAuthorsList}
					setAddedAuthorsList={props.setAddedAuthorsList}
				/>
				<AddedAuthorsToCourse
					authorsList={props.authorsList}
					addedAuthorsList={props.addedAuthorsList}
					setAddedAuthorsList={props.setAddedAuthorsList}
				/>
			</div>
		</div>
	);
}
export default CreateCourseBody;
