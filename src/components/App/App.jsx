import React from 'react';
import axios from 'axios';
import './App.css';

// mui imports
import { Paper, Stepper, Step, StepLabel } from '@mui/material';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Paper>
					<div className='header-paper'>
						<h1>Feedback!</h1>
						<p>Don't forget it!</p>
					</div>
				</Paper>
			</header>
			<main></main>
			<footer className='App-footer'>
				<Paper className='header-paper'>
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
				</Paper>
			</footer>
		</div>
	);
}

export default App;
