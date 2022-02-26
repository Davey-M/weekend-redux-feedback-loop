import './App.css';
import './View.css';

// mui imports
import { Paper } from '@mui/material';

// router imports
import { HashRouter as Router, Route } from 'react-router-dom';

// component imports
import Footer from '../Footer/Footer';
import NumberView from '../NumberView/NumberView';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<Paper>
						<div className='header-paper'>
							<h1>Feedback!</h1>
							<p>Don't forget it!</p>
						</div>
					</Paper>
				</header>
				<main className='App-main'>
					<Route path='/' exact>
						{/* <h1>Feelings</h1> */}
						<NumberView
							title='How are you feeling today?'
							route='/understanding'
							dispatchRoute='SET_FEELING'
							storeName='feelingStore'
						/>
					</Route>
					<Route path='/understanding' exact>
						<h1>Understanding</h1>
					</Route>
					<Route path='/support' exact>
						<h1>Support</h1>
					</Route>
					<Route path='/comments' exact>
						<h1>Comments</h1>
					</Route>
					<Route path='/review' exact>
						<h1>Review</h1>
					</Route>
					<Route path='/success' exact>
						<h1>Success</h1>
					</Route>
					<Route path='/admin' exact>
						<h1>Admin</h1>
					</Route>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
