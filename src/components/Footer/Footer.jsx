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
		console.log(thisRoute);

		switch (thisRoute) {
			case '/':
				setStep(0);
				break;
			case '/':
				setStep(1);
				break;
			case '/':
				setStep(2);
				break;
			case '/':
				setStep(3);
				break;
			case '/':
				setStep(4);
				break;
			default:
				setStep(5);
				break;
		}
	};

	useEffect(() => {
		const unlisten = history.listen(updateFooter);
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
