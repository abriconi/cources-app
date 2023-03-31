import './App.css';
import Header from './components/Header/Header';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

const App = () => {
	return (
		<div className='App'>
			<Header></Header>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
