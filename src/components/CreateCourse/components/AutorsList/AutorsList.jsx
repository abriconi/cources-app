import AddAuthor from '../AddAuthor/AddAuthor';
import './authorList.css';

function AutorsList(props) {
	function addAuthorToCourseList(authorToAdd) {
		props.setAddedAuthorsList([...props.addedAuthorsList, authorToAdd.id]);
	}
	return (
		<div className='authorListWrapper'>
			<h3>Authors</h3>
			<ul className='authorlist'>
				{props.authorsList.map((author) => (
					<AddAuthor
						key={author.name}
						authorsName={author.name}
						buttonText='Add author'
						setAuthorsList={props.setAuthorsList}
						onClick={() => {
							addAuthorToCourseList(author);
						}}
					/>
				))}
			</ul>
		</div>
	);
}

AutorsList.proptypes

export default AutorsList;
