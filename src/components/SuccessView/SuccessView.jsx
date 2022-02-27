import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SuccessView() {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClick = () => {
		// clear the current state
		dispatch({
			type: 'SET_FEELING',
			payload: '',
		});
		dispatch({
			type: 'SET_UNDERSTANDING',
			payload: '',
		});
		dispatch({
			type: 'SET_SUPPORT',
			payload: '',
		});
		dispatch({
			type: 'SET_COMMENTS',
			payload: '',
		});

		history.push('/');
	};

	return (
		<div className='view-wrapper'>
			<h1>Success</h1>
			<p>Thank you for submitting your feedback!</p>
			<Button
				variant='contained'
				style={{ width: 'max-content', margin: 'auto' }}
				onClick={handleClick}
			>
				Leave New Feedback
			</Button>
		</div>
	);
}

export default SuccessView;
