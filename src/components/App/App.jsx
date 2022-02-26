import React from 'react';
import axios from 'axios';
import './App.css';

// mui imports
import { Paper, Stepper, Step, StepLabel } from '@mui/material';

// router imports
import {
	HashRouter as Router,
	Route,
	Switch,
	useHistory,
} from 'react-router-dom';

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
				<main>
					<Route path='/' exact>
						<h1>Feelings</h1>
					</Route>
					<Route path='/understanding' exact>
						<h1>Understanding</h1>
					</Route>
					<Route path='support' exact>
						<h1>Support</h1>
					</Route>
					<Route path='comments' exact>
						<h1>Comments</h1>
					</Route>
					<Route path='review' exact>
						<h1>Review</h1>
					</Route>
				</main>
				<footer className='App-footer'>
					<div className='stepper-wrapper'>
						<Stepper activeStep={0}>
							<Step>
								<StepLabel>Feelings</StepLabel>
							</Step>
							<Step>
								<StepLabel>Understanding</StepLabel>
							</Step>
							<Step>
								<StepLabel>Support</StepLabel>
							</Step>
							<Step>
								<StepLabel>Comments</StepLabel>
							</Step>
							<Step>
								<StepLabel>Review</StepLabel>
							</Step>
						</Stepper>
					</div>
				</footer>
			</div>
		</Router>
	);
}

export default App;
