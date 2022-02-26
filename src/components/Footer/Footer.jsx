import { useEffect, useState } from 'react';

// mui imports
import { Stepper, Step, StepLabel } from '@mui/material';

// router imports
import { useHistory } from 'react-router-dom';

function Footer() {
	const history = useHistory();

	const [step, setStep] = useState(0);

	const updateFooter = () => {
		const thisRoute = history.location.pathname;
		// console.log(thisRoute); // test

		// set the stepper to the current route
		switch (thisRoute) {
			case '/':
				setStep(0);
				break;
			case '/understanding':
				setStep(1);
				break;
			case '/support':
				setStep(2);
				break;
			case '/comments':
				setStep(3);
				break;
			case '/review':
				setStep(4);
				break;
			case '/admin':
				setStep(-1);
				break;
			default:
				setStep(5);
				break;
		}
	};

	useEffect(() => {
		// set the history listener so update footer is called when the route changes
		const unlisten = history.listen(updateFooter);

		// call update footer once at the beginning in case we start on a different route than the home route
		updateFooter();

		// the unlisten function will be called when the component unmounts
		return () => {
			unlisten();
		};
	}, []);

	return (
		<footer className='App-footer'>
			<div className='stepper-wrapper'>
				<Stepper activeStep={step}>
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
	);
}

export default Footer;
