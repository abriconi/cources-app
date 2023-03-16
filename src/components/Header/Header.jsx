import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import './header.css';

function Header() {
	return (
		<div className='header'>
			<Logo />
			<div className='loginWrapper'>
				<p>Dave</p>
				<Button buttonText='Logout' btnSize='small'></Button>
			</div>
		</div>
	);
}

export default Header;
