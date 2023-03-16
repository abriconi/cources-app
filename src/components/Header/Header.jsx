import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import { BUTTON_TEXT } from '../constans';
import './header.css';

function Header() {
	return (
		<div className='header'>
			<Logo />
			<div className='loginWrapper'>
				<p>Dave</p>
				<Button buttonText={BUTTON_TEXT.logout} btnSize='small'></Button>
			</div>
		</div>
	);
}

export default Header;
