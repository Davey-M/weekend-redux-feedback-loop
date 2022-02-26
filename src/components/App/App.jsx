import { useEffect, useState } from 'react';
import './App.css';
import './View.css';

// mui imports
import {
	Paper,
	createTheme,
	ThemeProvider,
	Switch,
	FormControlLabel,
} from '@mui/material';

// router imports
import { HashRouter as Router, Route } from 'react-router-dom';

// component imports
import Footer from '../Footer/Footer';
import NumberView from '../NumberView/NumberView';
import TextView from '../TextView/TextView';
import ReviewView from '../ReviewView/ReviewView';
import AdminView from '../AdminView/AdminView';

function App() {
	const [theme, setDarkTheme] = useState(false);

	const darkTheme = createTheme({
		palette: {
			mode: theme ? 'dark' : 'light',
		},
	});

	const setTheme = () => {
		setDarkTheme(!theme);
	};

	return (
		<Router>
			<ThemeProvider theme={darkTheme}>
				<div className={'App ' + (theme ? 'dark-theme' : '')}>
					<header className='App-header'>
						<Paper>
							<div className='header-paper'>
								<h1>Feedback!</h1>
								<p>Don't forget it!</p>
								<div className='control-container'>
									{/* <FormControlLabel control={<Switch />} label='Dark Mode' /> */}
									<Switch onClick={setTheme} />
									<span>Dark Mode</span>
								</div>
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
							{/* <h1>Understanding</h1> */}
							<NumberView
								title='How well do you understand the content?'
								route='/support'
								dispatchRoute='SET_UNDERSTANDING'
								storeName='understandingStore'
							/>
						</Route>
						<Route path='/support' exact>
							{/* <h1>Support</h1> */}
							<NumberView
								title='How well are you being supported?'
								route='/comments'
								dispatchRoute='SET_SUPPORT'
								storeName='supportStore'
							/>
						</Route>
						<Route path='/comments' exact>
							{/* <h1>Comments</h1> */}
							<TextView
								title='Any comments you want to share?'
								route='/review'
								dispatchRoute='SET_COMMENTS'
								storeName='commentsStore'
							/>
						</Route>
						<Route path='/review' exact>
							{/* <h1>Review</h1> */}
							<ReviewView />
						</Route>
						<Route path='/success' exact>
							<h1>Success</h1>
						</Route>
						<Route path='/admin' exact>
							{/* <h1>Admin</h1> */}
							<AdminView />
						</Route>
					</main>
					<Footer />
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;
