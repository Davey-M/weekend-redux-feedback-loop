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
					{/* <Paper> */}
					<div className='header-paper'>
						<h1>Feedback!</h1>
						<p>Don't forget it!</p>
					</div>
					{/* </Paper> */}
				</header>
				<main>
					<Route path='/' exact>
						Hi
					</Route>
					<Route path='/hello' exact>
						Hello
					</Route>
				</main>
				<footer className='App-footer'>
					{/* <Paper className='header-paper'> */}
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
					{/* </Paper> */}
				</footer>
			</div>
		</Router>
	);
}

export default App;
