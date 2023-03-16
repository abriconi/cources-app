import AddAuthor from '../AddAuthor/AddAuthor';
import { filterAuthor } from '../../../helpers/filterAuthor';
import './addedAuthorsToCourse.css';

function AddingAuthorsToCourse(props) {
	const filteredAutorstoAddToCourseList = filterAuthor(
		props.authorsList,
		props.addedAuthorsList
	);
	const deleteAuthorfromListOfCourse = (deletedAuthor) => {
		const addedAuthors = props.addedAuthorsList.filter(
			(adAuthor) => adAuthor !== deletedAuthor.id
		);
		props.setAddedAuthorsList(addedAuthors);
	};
	const isExistAuthorsList =
		props.addedAuthorsList && props.addedAuthorsList.length > 0;
	return (
		<div className='addedAuthorsListWrapper'>
			<h3 className='addedAuthorsListTitle'>Course authors</h3>
			{!isExistAuthorsList ? (
				<p className='addedAuthorsListDescription'>Authors list is empty</p>
			) : (
				<ul className='authorlist'>
					{filteredAutorstoAddToCourseList.map((addedAuthor) => (
						<li key={addedAuthor.name}>
							<AddAuthor
								authorsName={addedAuthor.name}
								buttonText='Delete'
								onClick={() => deleteAuthorfromListOfCourse(addedAuthor)}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
export default AddingAuthorsToCourse;
