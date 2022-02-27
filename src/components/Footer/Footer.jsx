import { useEffect, useState } from 'react';

// mui imports
import { Stepper, Step, StepLabel } from '@mui/material';

// router imports
import { useLocation } from 'react-router-dom';

function Footer() {
	const location = useLocation();

	const [step, setStep] = useState(0);

	const updateFooter = () => {
		const thisRoute = location.pathname;
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
			case '/success':
				setStep(5);
				break;
			default:
				setStep(-1);
				break;
		}
	};

	useEffect(() => {
		updateFooter();
	}, [location]);

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
